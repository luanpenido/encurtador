'use server'

import { supabase } from '@/lib/supabase';
import { nanoid } from 'nanoid';

export async function shortenUrl(url: string, baseUrl: string) {
  if (!url) {
    throw new Error('URL is required');
  }

  try {
    new URL(url);
  } catch {
    throw new Error('Invalid URL format');
  }

  const shortId = nanoid(7);

  const { error } = await supabase
    .from('urls')
    .insert([{ original_url: url, short_id: shortId }]);

  if (error) {
    throw new Error(`Database error: ${error.message}`);
  }

  return `${baseUrl}/${shortId}`;
}
