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

-- =============================================================
-- Mensagens enviadas pelo formulário de contato do site (api/contact).
-- Inserção apenas via service role.
-- =============================================================

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz default now()
);

create index if not exists contact_messages_created_at_idx
  on contact_messages (created_at desc);

alter table contact_messages enable row level security;
-- Sem policies públicas: leitura/escrita só via service role.
