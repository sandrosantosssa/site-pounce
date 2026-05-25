-- =============================================================
-- Site Pounce — schema Supabase
-- =============================================================
-- Tabela de leads capturados pela landing de lançamento.
-- Inserção apenas via service role (função api/notify).
-- =============================================================

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  origem text default 'launch',
  created_at timestamptz default now(),
  unique (email)
);

alter table leads enable row level security;
-- Sem policies públicas: leitura/escrita só via service role.
