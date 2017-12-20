SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- ADS datatable
CREATE TABLE ads (
  "id"        uuid         NOT NULL DEFAULT uuid_generate_v1(),

  "enable"    boolean      NOT NULL DEFAULT TRUE,

  "blocks"    varchar(2)[] NOT NULL NOT NULL DEFAULT '{a1}'::varchar(2)[],

  "title"     varchar(160) NOT NULL DEFAULT '',
  "description"   varchar(160) NOT NULL DEFAULT '',

  "url"       varchar(256) NOT NULL DEFAULT '',

  "startDate" timestamp without time zone NOT NULL DEFAULT timezone('UTC', now()),
  "endDate"   timestamp without time zone NOT NULL DEFAULT timezone('UTC', now() + '1 month'::interval),

  "content"   text         NOT NULL DEFAULT '',
  "files"     oid[]        NOT NULL DEFAULT '{}'::oid[],

  "stats"     jsonb        NOT NULL DEFAULT '{}'::jsonb,

  CONSTRAINT ads__idx_pkey PRIMARY KEY ("id"),

  CONSTRAINT ads__check__stats  CHECK ("stats"::text  ~ '^{')
) WITH (OIDS = FALSE);

-- Scann indexes
CREATE INDEX ads__idx__enable    ON ads USING btree ("enable");
CREATE INDEX ads__idx__blocks    ON ads USING gin   ("blocks");
CREATE INDEX ads__idx__startDate ON ads USING btree ("startDate");
CREATE INDEX ads__idx__endDate   ON ads USING btree ("endDate");

-- JSONB indexes
CREATE INDEX ads__idx__stats  ON ads USING gin ("stats");

-- Prevent change videos id
CREATE TRIGGER ads__prevent_change_id__trigger
  BEFORE UPDATE ON ads FOR EACH ROW
  EXECUTE PROCEDURE prevent_change_id();
