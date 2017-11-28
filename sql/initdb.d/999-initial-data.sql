SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- Default admin user
INSERT INTO users(email, roles, password, totp)
  VALUES ('wisdman@ajaw.it',
          '{user,su}',
          encode(digest('Nevis-6985', 'sha512'), 'hex'),
          encode(digest(uuid_generate_v4()::text, 'sha256'), 'hex')
         );
