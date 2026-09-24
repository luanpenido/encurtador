-- Criar a tabela de URLs
CREATE TABLE IF NOT EXISTS urls (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  original_url text NOT NULL,
  short_id text UNIQUE NOT NULL,
  title text,
  clicks integer DEFAULT 0 NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar RLS
ALTER TABLE urls ENABLE ROW LEVEL SECURITY;

-- Politicas de acesso para o encurtador
CREATE POLICY "Allow public insert" ON urls FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read" ON urls FOR SELECT USING (true);
CREATE POLICY "Allow public update" ON urls FOR UPDATE USING (true) WITH CHECK (true);
