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

  // Incrementa os cliques com await para garantir a gravação antes do redirecionamento
  try {
    await supabase
      .from('urls')
      .update({ clicks: (data.clicks || 0) + 1 })
      .eq('id', data.id);
  } catch (err) {
    console.error('Erro ao incrementar cliques:', err);
  }

  // Usa 307 Temporary Redirect em vez de 301 para evitar cache agressivo no navegador
  return NextResponse.redirect(data.original_url, 307);
}
