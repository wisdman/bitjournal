SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- ICO datatable
CREATE TABLE ico (
  "id"            uuid         NOT NULL DEFAULT uuid_generate_v1(),

  "enable"        boolean      NOT NULL DEFAULT TRUE,

  "url"           varchar(256) NOT NULL,

  "extUrl"        varchar(256) NOT NULL DEFAULT '',

  "title"         varchar(160) NOT NULL DEFAULT '',
  "ogTitle"       varchar(160) NOT NULL DEFAULT '',

  "description"   varchar(160) NOT NULL DEFAULT '',
  "ogDescription" varchar(160) NOT NULL DEFAULT '',

  "image"         oid          DEFAULT NULL,
  "ogImage"       oid          DEFAULT NULL,

  "startDate"     timestamp without time zone NOT NULL DEFAULT timezone('UTC', now()),

  "goal"          bigint       NOT NULL DEFAULT 0,

  "collected"     bigint       NOT NULL DEFAULT 0,

  "status"        text         NOT NULL DEFAULT '',

  "content"       text         NOT NULL DEFAULT '',

  "rating"        jsonb        NOT NULL DEFAULT '{}'::jsonb,

  "bjr"           smallint     NOT NULL DEFAULT 0,

  "branding"      jsonb        NOT NULL DEFAULT '{}'::jsonb,

  CONSTRAINT ico__idx_pkey PRIMARY KEY ("id"),

  CONSTRAINT ico__check__url CHECK ("url" ~ '^[a-z0-9]([a-z0-9_-]*[a-z0-9])?$'),

  CONSTRAINT ico__check__goal      CHECK ("goal" >= 0),
  CONSTRAINT ico__check__collected CHECK ("collected" >= 0),

  CONSTRAINT ico__check__bjr CHECK ("bjr" >= 0 AND "bjr" <= 5),

  CONSTRAINT ico__check__rating CHECK ("rating"::text ~ '^{'),

  CONSTRAINT ico__check__branding CHECK ("branding"::text ~ '^{')
) WITH (OIDS = FALSE);

-- Check unique indexes
CREATE UNIQUE INDEX ico__idx__unique_url ON ico USING btree ("url");

-- Scann indexes
CREATE INDEX ico__idx__enable ON ico USING btree ("enable");
CREATE INDEX ico__idx__rating ON ico USING gin   ("rating");
CREATE INDEX ico__idx__bjr    ON ico USING btree ("bjr");

-- Prevent change ico id
CREATE TRIGGER ico__prevent_change_id__trigger
  BEFORE UPDATE ON ico FOR EACH ROW
  EXECUTE PROCEDURE prevent_change_id();
