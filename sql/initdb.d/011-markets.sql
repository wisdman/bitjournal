SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- Markets datatable
CREATE TABLE markets (
  "id"            uuid         NOT NULL DEFAULT uuid_generate_v1(),

  "url"           varchar(256) DEFAULT NULL,

  "enable"        boolean      NOT NULL DEFAULT TRUE,

  "rating"        bigint       NOT NULL DEFAULT 0,

  "title"         varchar(160) NOT NULL DEFAULT '',
  "ogTitle"       varchar(160) NOT NULL DEFAULT '',

  "description"   varchar(160) NOT NULL DEFAULT '',
  "ogDescription" varchar(160) NOT NULL DEFAULT '',

  "image"         oid          DEFAULT NULL,
  "ogImage"       oid          DEFAULT NULL,

  "content"       text         NOT NULL DEFAULT '',

  "branding"      jsonb        NOT NULL DEFAULT '{}'::jsonb,

  CONSTRAINT markets__idx_pkey PRIMARY KEY ("id"),

  CONSTRAINT markets__check__url CHECK ("url" ~ '^[a-z0-9]([a-z0-9_-]*[a-z0-9])?$'),

  CONSTRAINT markets__check__branding CHECK ("branding"::text  ~ '^{')
) WITH (OIDS = FALSE);

-- Check unique indexes
CREATE UNIQUE INDEX markets__idx__unique_url ON markets USING btree ("url");

-- Scann indexes
CREATE INDEX markets__idx__enable ON markets USING btree ("enable");
CREATE INDEX markets__idx__rating ON markets USING btree ("rating");
