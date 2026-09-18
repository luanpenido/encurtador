-- Criar a tabela de URLs
CREATE TABLE urls (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  original_url text NOT NULL,
  short_id text UNIQUE NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar RLS
ALTER TABLE urls ENABLE ROW LEVEL SECURITY;

-- Permitir leitura e escrita publica
CREATE POLICY "Allow public insert" ON urls FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read" ON urls FOR SELECT USING (true);
