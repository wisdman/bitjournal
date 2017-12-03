SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- Currencies datatable
CREATE TABLE currencies (
  "symbol"        varchar(5)   NOT NULL,

  "enable"        boolean      NOT NULL DEFAULT TRUE,

  "extUrl"        varchar(256) NOT NULL DEFAULT '',

  "title"         varchar(160) NOT NULL DEFAULT '',
  "ogTitle"       varchar(160) NOT NULL DEFAULT '',

  "description"   varchar(160) NOT NULL DEFAULT '',
  "ogDescription" varchar(160) NOT NULL DEFAULT '',

  "image"         oid          DEFAULT NULL,
  "ogImage"       oid          DEFAULT NULL,

  "startDate"     timestamp without time zone NOT NULL DEFAULT timezone('UTC', now()),

  "founder"       text         NOT NULL DEFAULT '',

  "maxCoin"       bigint       NOT NULL DEFAULT 0,

  "algorithm"     text         NOT NULL DEFAULT '',

  "system"        text         NOT NULL DEFAULT '',

  "content"       text         NOT NULL DEFAULT '',

  "rating"        jsonb        NOT NULL DEFAULT '{}'::jsonb,

  "bjr"           smallint     NOT NULL DEFAULT 0,

  "branding"      jsonb        NOT NULL DEFAULT '{}'::jsonb,

  CONSTRAINT currencies__idx_pkey PRIMARY KEY ("symbol"),

  CONSTRAINT currencies__check__symbol CHECK ("symbol" ~ '^[A-Z]+$'),

  CONSTRAINT currencies__check__maxCoin CHECK ("maxCoin" >= 0),

  CONSTRAINT currencies__check__bjr CHECK ("bjr" >= 0 AND "bjr" <= 5),

  CONSTRAINT currencies__check__rating CHECK ("rating"::text  ~ '^{'),

  CONSTRAINT currencies__check__branding CHECK ("branding"::text  ~ '^{')
) WITH (OIDS = FALSE);

-- Scann indexes
CREATE INDEX currencies__idx__enable ON currencies USING btree ("enable");
