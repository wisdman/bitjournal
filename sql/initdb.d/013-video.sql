SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- Video ribbon sequence
CREATE SEQUENCE video__order__seq;

-- Video ribbon datatable
CREATE TABLE video (
  "id"            varchar(11)  NOT NULL,
  "enable"        boolean      NOT NULL DEFAULT TRUE,

  "order"         bigint       NOT NULL DEFAULT nextval('video__order__seq'),

  "title"         varchar(160) NOT NULL DEFAULT '',
  "ogTitle"       varchar(160) NOT NULL DEFAULT '',

  "description"   varchar(160) NOT NULL DEFAULT '',
  "ogDescription" varchar(160) NOT NULL DEFAULT '',

  "image"         oid          DEFAULT NULL,
  "ogImage"       oid          DEFAULT NULL,

  CONSTRAINT video__idx_pkey PRIMARY KEY ("id"),

  CONSTRAINT video__check__id CHECK ("id" ~ '^[a-zA-Z0-9]+$')
) WITH (OIDS = FALSE);

ALTER SEQUENCE video__order__seq OWNED BY video."order";

-- Check unique indexes
CREATE UNIQUE INDEX video__idx__unique_order ON video USING btree ("order");

-- Scann indexes
CREATE INDEX video__idx__enable ON video USING btree ("enable");

-- Prevent change videos id
CREATE TRIGGER video__prevent_change_id__trigger
  BEFORE UPDATE ON video FOR EACH ROW
  EXECUTE PROCEDURE prevent_change_id();
