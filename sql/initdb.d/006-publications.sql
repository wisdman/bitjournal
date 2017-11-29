SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- Publications datatable
CREATE TABLE publications (
  "id"            uuid         NOT NULL DEFAULT uuid_generate_v1(),

  "ts"            timestamp without time zone NOT NULL DEFAULT timezone('UTC', now()),
  "url"           varchar(256) DEFAULT NULL,

  "enable"        boolean      NOT NULL DEFAULT TRUE,

  "lastModified"  timestamp without time zone NOT NULL DEFAULT timezone('UTC', now()),

  "weight"        smallint     NOT NULL DEFAULT 1,

  "sections"      uuid[]       NOT NULL DEFAULT '{}'::uuid[],

  "bigTitle"      varchar(160) NOT NULL DEFAULT '',
  "title"         varchar(160) NOT NULL DEFAULT '',
  "ogTitle"       varchar(160) NOT NULL DEFAULT '',

  "description"   varchar(160) NOT NULL DEFAULT '',
  "ogDescription" varchar(160) NOT NULL DEFAULT '',

  "image"         oid          DEFAULT NULL,
  "ogImage"       oid          DEFAULT NULL,

  "authors"       uuid[]       NOT NULL DEFAULT '{}'::uuid[],
  "tags"          text[]       NOT NULL DEFAULT '{}'::text[],

  "sharing"       boolean      NOT NULL DEFAULT TRUE,
  "comments"      boolean      NOT NULL DEFAULT TRUE,
  "advertising"   boolean      NOT NULL DEFAULT TRUE,

  "rss"           boolean      NOT NULL DEFAULT TRUE,

  "yandexNews"    boolean      NOT NULL DEFAULT TRUE,
  "yandexZen"     boolean      NOT NULL DEFAULT TRUE,

  "facebookIA"    boolean      NOT NULL DEFAULT TRUE,

  "branding"      jsonb        NOT NULL DEFAULT '{}'::jsonb,

  "content"       text         NOT NULL DEFAULT '',

  CONSTRAINT "publications__idx_pkey__id" PRIMARY KEY ("id"),

  CONSTRAINT "publications__check__url" CHECK ("url" ~ '^[a-z0-9_-]+$')
) WITH (OIDS = FALSE);

-- Check unique indexes
CREATE UNIQUE INDEX "publications__idx__unique_ts_and_url" ON "publications" USING btree ("ts", "url");

-- Scann indexes
CREATE INDEX "publications__idx__ts"           ON "publications" USING btree ("ts");
CREATE INDEX "publications__idx__url"          ON "publications" USING btree ("url");
CREATE INDEX "publications__idx__enable"       ON "publications" USING btree ("enable");
CREATE INDEX "publications__idx__lastModified" ON "publications" USING btree ("lastModified");
CREATE INDEX "publications__idx__weight"       ON "publications" USING btree ("weight");
CREATE INDEX "publications__idx__rss"          ON "publications" USING btree ("rss");
CREATE INDEX "publications__idx__yandexNews"   ON "publications" USING btree ("yandexNews");
CREATE INDEX "publications__idx__yandexZen"    ON "publications" USING btree ("yandexZen");
CREATE INDEX "publications__idx__facebookIA"   ON "publications" USING btree ("facebookIA");

-- Scann GIN indexes
CREATE INDEX "publications__idx__sections"     ON "publications" USING GIN ("sections");

-- Prevent change user id
CREATE TRIGGER "publications__trigger__prevent_change_id_trigger"
  BEFORE UPDATE ON "publications" FOR EACH ROW
  EXECUTE PROCEDURE "prevent_change_id_trigger"();
