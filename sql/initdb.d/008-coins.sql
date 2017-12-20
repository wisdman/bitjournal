SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- Coins datatable
CREATE TABLE coins (
  "symbol"          varchar(16)  NOT NULL,

  "enable"          boolean      NOT NULL DEFAULT TRUE,
  "hot"             boolean      NOT NULL DEFAULT FALSE,

  "title"           varchar(160) NOT NULL DEFAULT '',
  "ogTitle"         varchar(160) NOT NULL DEFAULT '',

  "description"     varchar(160) NOT NULL DEFAULT '',
  "ogDescription"   varchar(160) NOT NULL DEFAULT '',

  "founder"         text         NOT NULL DEFAULT '',
  "startDate"       date         DEFAULT NULL,

  "url"             text         NOT NULL DEFAULT '',

  "algorithm"       text         NOT NULL DEFAULT '',
  "proofType"       text         NOT NULL DEFAULT '',

  "maxSupply"       decimal      NOT NULL DEFAULT 0,
  "availableSupply" decimal      NOT NULL DEFAULT 0,

  "blockReward"     decimal      NOT NULL DEFAULT 0,

  "lastBlockTS"     timestamp without time zone DEFAULT NULL,
  "lastBlockNumber" decimal      NOT NULL DEFAULT 0,

  "hashRate"        decimal      NOT NULL DEFAULT 0,

  "priceUSD"        decimal      NOT NULL DEFAULT 0,
  "priceBTC"        decimal      NOT NULL DEFAULT 0,
  "priceRUB"        decimal      NOT NULL DEFAULT 0,

  "volume24h":      decimal      NOT NULL DEFAULT 0,

  "histoday"        jsonb        NOT NULL DEFAULT '{}'::jsonb,

  "rating"          jsonb        NOT NULL DEFAULT '{}'::jsonb,

  "branding"        jsonb        NOT NULL DEFAULT '{}'::jsonb,

  CONSTRAINT coins__idx_pkey PRIMARY KEY ("symbol"),

  CONSTRAINT coins__check__symbol CHECK ("symbol" ~ '^[A-Z0-9*]+$'),

  CONSTRAINT coins__check__maxSupply       CHECK ("maxSupply"       >= 0),
  CONSTRAINT coins__check__availableSupply CHECK ("availableSupply" >= 0),
  CONSTRAINT coins__check__blockReward     CHECK ("blockReward"     >= 0),
  CONSTRAINT coins__check__lastBlockNumber CHECK ("lastBlockNumber" >= 0),
  CONSTRAINT coins__check__hashRate        CHECK ("hashRate"        >= 0),

  CONSTRAINT coins__check__priceUSD CHECK ("priceUSD" >= 0),
  CONSTRAINT coins__check__priceBTC CHECK ("priceBTC" >= 0),
  CONSTRAINT coins__check__priceRUB CHECK ("priceRUB" >= 0),

  CONSTRAINT coins__check__volume24h CHECK ("volume24h" >= 0),

  CONSTRAINT coins__check__histoday CHECK ("histoday"::text  ~ '^{'),
  CONSTRAINT coins__check__rating   CHECK ("rating"::text  ~ '^{'),
  CONSTRAINT coins__check__branding CHECK ("branding"::text  ~ '^{')
) WITH (OIDS = FALSE);

-- Scann indexes
CREATE INDEX coins__idx__enable ON coins USING btree ("enable");
CREATE INDEX coins__idx__hot    ON coins USING btree ("hot");
CREATE INDEX coins__idx__rating ON coins USING gin   ("rating");
