SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- User roles
CREATE TYPE roles AS ENUM (
  'user',          -- user
  'author',        -- author
  'publisher',     -- publisher
  'сhief',         -- chief editor
  'administrator', -- full futured admin
  'su'             -- super user
);
