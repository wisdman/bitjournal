SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- Sections datatable
CREATE TABLE sections (
  "id"            uuid         NOT NULL DEFAULT uuid_generate_v1(),

  "enable"        boolean      NOT NULL DEFAULT TRUE,

  "url"           varchar(256) NOT NULL,

  "title"         varchar(160) NOT NULL DEFAULT '',
  "ogTitle"       varchar(160) NOT NULL DEFAULT '',

  "description"   varchar(160) NOT NULL DEFAULT '',
  "ogDescription" varchar(160) NOT NULL DEFAULT '',

  "image"         oid          DEFAULT NULL,
  "ogImage"       oid          DEFAULT NULL,

  "branding"      jsonb        NOT NULL DEFAULT '{}'::jsonb,

  CONSTRAINT sections__idx_pkey PRIMARY KEY ("id"),

  CONSTRAINT sections__check__url CHECK ("url" ~ '^[a-z0-9]([a-z0-9_-]*[a-z0-9])?(\/[a-z0-9]([a-z0-9_-]*[a-z0-9])?)?$'),

  CONSTRAINT sections__check__url_blacklist CHECK ("url" !~ '^([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|\d{4}-\d{2}-\d{2}|users|currencies|markets|exchanges|ico|calc)(\/.*)?$'),

  CONSTRAINT sections__check__branding CHECK ("branding"::text  ~ '^{')
) WITH (OIDS = FALSE);

-- Check unique indexes
CREATE UNIQUE INDEX sections__idx__unique_url ON sections USING btree ("url");

-- Scann indexes
CREATE INDEX sections__idx__enable ON sections USING btree ("enable");

-- Prevent change sections id
CREATE TRIGGER sections__prevent_change_id__trigger
  BEFORE UPDATE ON sections FOR EACH ROW
  EXECUTE PROCEDURE prevent_change_id();
