import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ shortId: string }> }
) {
  const resolvedParams = await params;
  const shortId = resolvedParams.shortId;

  if (!shortId) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const { data, error } = await supabase
    .from('urls')
    .select('id, original_url, clicks')
    .eq('short_id', shortId)
    .single();

  if (error || !data) {
    return NextResponse.redirect(new URL('/?error=not_found', request.url));
  }

  // Incrementa os cliques em segundo plano (fire and forget)
  supabase
    .from('urls')
    .update({ clicks: (data.clicks || 0) + 1 })
    .eq('id', data.id)
    .then();

  // Usa 307 Temporary Redirect em vez de 301 para evitar cache agressivo no navegador (permite contar os cliques)
  return NextResponse.redirect(data.original_url, 307);
}
