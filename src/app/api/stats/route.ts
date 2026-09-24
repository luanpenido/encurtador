import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const revalidate = 0; // Disable cache for this route

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    const expectedKey = process.env.API_SECRET_KEY;

    if (!expectedKey) {
      return NextResponse.json({ error: 'API_SECRET_KEY is not configured on the server.' }, { status: 500 });
    }

    if (authHeader !== `Bearer ${expectedKey}`) {
      return NextResponse.json({ error: 'Unauthorized. Invalid API Key.' }, { status: 401 });
    }

    // Busca os 50 links ordenados por cliques (decrescente) e por data mais recente
    const { data: links, error, count } = await supabase
      .from('urls')
      .select('short_id, original_url, title, clicks, created_at', { count: 'exact' })
      .order('clicks', { ascending: false })
      .order('created_at', { ascending: false })
      .limit(50);

    if (error) {
      return NextResponse.json({ error: `Database error: ${error.message}` }, { status: 500 });
    }

    // Adapta o formato da resposta para ficar similar ao que o bot espera
    const formattedLinks = (links || []).map(link => ({
      slug: link.short_id,
      url: link.original_url,
      title: link.title,
      clicks: link.clicks || 0,
      createdAt: link.created_at
    }));

    return NextResponse.json({ totalLinks: count, links: formattedLinks });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
