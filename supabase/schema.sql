-- Run this in the Supabase SQL editor to set up the tables the app expects.

create table if not exists categories (
  slug text primary key,
  title text not null,
  description text not null,
  chapter text not null
);

create table if not exists prompts (
  id text primary key,
  category text not null references categories(slug),
  clause_number text not null,
  title text not null,
  summary text not null,
  body text not null,               -- the actual prompt text, not sent to the client list view
  min_plan text not null default 'أساسي', -- 'أساسي' | 'احترافي' | 'مؤسسات'
  usage_count integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists subscribers (
  id uuid primary key default gen_random_uuid(),
  clerk_user_id text unique not null,
  full_name text,
  plan text not null default 'أساسي',
  renews_on date
);

-- Row Level Security: subscribers can only read prompt bodies their plan covers.
alter table prompts enable row level security;
alter table subscribers enable row level security;

create policy "Subscribers read own row"
  on subscribers for select
  using (clerk_user_id = auth.jwt() ->> 'sub');

create policy "Anyone authenticated can list prompt metadata"
  on prompts for select
  using (true);
-- Enforce `body` visibility (the actual prompt text) at the API layer,
-- not here — see lib/queries.ts, which never selects `body` for the
-- dashboard list view. Fetch `body` only in a server action after
-- checking the subscriber's plan against min_plan.
