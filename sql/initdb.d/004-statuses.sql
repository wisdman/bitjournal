SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- User statuses datatable
CREATE TABLE statuses (
  "id"          uuid         NOT NULL DEFAULT uuid_generate_v1(),

  "enable"      boolean      NOT NULL DEFAULT TRUE,

  "title"       varchar(160) NOT NULL DEFAULT '',
  "description" varchar(160) NOT NULL DEFAULT '',

  "image"       oid          DEFAULT NULL,

  CONSTRAINT statuses__idx_pkey PRIMARY KEY ("id")
) WITH (OIDS = FALSE);

-- Scann indexes
CREATE INDEX statuses__idx__enable ON statuses USING btree ("enable");

-- Prevent change status id
CREATE TRIGGER statuses__prevent_change_id__trigger
  BEFORE UPDATE ON statuses FOR EACH ROW
  EXECUTE PROCEDURE prevent_change_id();
