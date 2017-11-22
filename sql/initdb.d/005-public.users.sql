SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = private;

-- Users full view
CREATE VIEW public.users AS
  SELECT
    users.id,
    users.enable,
    users.roles,

    users.title,
    users.description,

    users.email,
    users.phone,

    users.oauth,

    users.image,
    users.card,

    COALESCE(
      (SELECT
        jsonb_object_agg(
          sessions.id,
          jsonb_build_object('id', sessions.id, 'ip', sessions.ip, 'expires', sessions.expires)
        )
      FROM
        sessions
      WHERE
        sessions.expires > timezone('UTC', now())
        AND
        sessions.owner = users.id),
    '{}'::jsonb) AS sessions
  FROM
    private.users AS users;
