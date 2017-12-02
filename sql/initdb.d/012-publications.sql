SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- Publications datatable
CREATE TABLE publications (
  "id"            uuid         NOT NULL DEFAULT uuid_generate_v1(),

  "ts"            timestamp without time zone NOT NULL DEFAULT timezone('UTC', now()),
  "url"           varchar(256) DEFAULT NULL,

  "enable"        boolean      NOT NULL DEFAULT TRUE,

  "currencies"    uuid[]       NOT NULL DEFAULT '{}'::uuid[],
  "exchanges"     uuid[]       NOT NULL DEFAULT '{}'::uuid[],
  "ico"           uuid[]       NOT NULL DEFAULT '{}'::uuid[],
  "markets"       uuid[]       NOT NULL DEFAULT '{}'::uuid[],
  "sections"      uuid[]       NOT NULL DEFAULT '{}'::uuid[],

  "weight"        smallint     NOT NULL DEFAULT 1,

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

  "content"       text         NOT NULL DEFAULT '',

  "branding"      jsonb        NOT NULL DEFAULT '{}'::jsonb,

  "lastModified"  timestamp without time zone NOT NULL DEFAULT timezone('UTC', now()),

  CONSTRAINT publications__idx_pkey PRIMARY KEY ("id"),

  CONSTRAINT publications__check__url CHECK ("url" ~ '^[a-z0-9]([a-z0-9_-]*[a-z0-9])?$'),

  CONSTRAINT publications__check__branding CHECK ("branding"::text ~ '^{')
) WITH (OIDS = FALSE);

-- Check unique indexes
CREATE UNIQUE INDEX publications__idx__unique_ts_and_url ON publications USING btree ("ts", "url");

-- Scann indexes
CREATE INDEX publications__idx__ts           ON publications USING btree ("ts");
CREATE INDEX publications__idx__url          ON publications USING btree ("url");
CREATE INDEX publications__idx__enable       ON publications USING btree ("enable");
CREATE INDEX publications__idx__currencies   ON publications USING gin   ("currencies");
CREATE INDEX publications__idx__exchanges    ON publications USING gin   ("exchanges");
CREATE INDEX publications__idx__ico          ON publications USING gin   ("ico");
CREATE INDEX publications__idx__markets      ON publications USING gin   ("markets");
CREATE INDEX publications__idx__sections     ON publications USING gin   ("sections");
CREATE INDEX publications__idx__weight       ON publications USING btree ("weight");
CREATE INDEX publications__idx__authors      ON publications USING gin   ("authors");
CREATE INDEX publications__idx__rss          ON publications USING btree ("rss");
CREATE INDEX publications__idx__yandexNews   ON publications USING btree ("yandexNews");
CREATE INDEX publications__idx__yandexZen    ON publications USING btree ("yandexZen");
CREATE INDEX publications__idx__facebookIA   ON publications USING btree ("facebookIA");
CREATE INDEX publications__idx__lastModified ON publications USING btree ("lastModified");

-- Prevent change publications id
CREATE TRIGGER publications__prevent_change_id__trigger
  BEFORE UPDATE ON publications FOR EACH ROW
  EXECUTE PROCEDURE prevent_change_id();
