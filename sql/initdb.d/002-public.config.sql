SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = private;

-- Global config parametrs datatable
CREATE TABLE public.config (
  key   varchar(32) NOT NULL,
  value jsonb       NOT NULL DEFAULT 'null'::jsonb,

  CONSTRAINT config__idx_pkey__key PRIMARY KEY (key),

  CONSTRAINT config__check__key CHECK(key ~ '^[a-z]([0-9a-z_]*[0-9a-z])?$')
) WITH (OIDS = FALSE);

CREATE INDEX config__idx__value ON public.config USING gin (value);
