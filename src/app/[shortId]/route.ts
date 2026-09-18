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
    .select('original_url')
    .eq('short_id', shortId)
    .single();

  if (error || !data) {
    return NextResponse.redirect(new URL('/?error=not_found', request.url));
  }

  return NextResponse.redirect(data.original_url, 301);
}
