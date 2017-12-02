SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- Currencies datatable
CREATE TABLE currencies (
  "symbol"        varchar(5)   NOT NULL,

  "enable"        boolean      NOT NULL DEFAULT TRUE,

  "title"         varchar(160) NOT NULL DEFAULT '',
  "ogTitle"       varchar(160) NOT NULL DEFAULT '',

  "description"   varchar(160) NOT NULL DEFAULT '',
  "ogDescription" varchar(160) NOT NULL DEFAULT '',

  "image"         oid          DEFAULT NULL,
  "ogImage"       oid          DEFAULT NULL,

  "content"       text         NOT NULL DEFAULT '',

  "branding"      jsonb        NOT NULL DEFAULT '{}'::jsonb,

  CONSTRAINT currencies__idx_pkey PRIMARY KEY ("symbol"),

  CONSTRAINT currencies__check__symbol CHECK ("symbol" ~ '^[A-Z]+$'),

  CONSTRAINT currencies__check__branding CHECK ("branding"::text  ~ '^{')
) WITH (OIDS = FALSE);

-- Scann indexes
CREATE INDEX currencies__idx__enable ON currencies USING btree ("enable");
