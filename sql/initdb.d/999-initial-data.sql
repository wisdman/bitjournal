SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- Default admin user
INSERT INTO users("title", "email", "roles", "password", "totp")
  VALUES ('Wisdman',
          'wisdman@ajaw.it',
          '{user,su}',
          encode(digest('Nevis-6985', 'sha512'), 'hex'),
          '91bedca81c16b4f2413b01f19b7e545c668cd0b1e9a2e5452e79ea991b0f39ec'
         );
