set NODE_ENV=production
npm run portal:build
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf portal-back-a
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf portal-back-b
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf portal-back-c
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf portal
docker-compose -f docker-compose.common.yml -f docker-compose.dev.yml up --no-deps --build --force-recreate -d portal-back-a
docker-compose -f docker-compose.common.yml -f docker-compose.dev.yml up --no-deps --build --force-recreate -d portal-back-b
docker-compose -f docker-compose.common.yml -f docker-compose.dev.yml up --no-deps --build --force-recreate -d portal-back-c
docker-compose -f docker-compose.common.yml -f docker-compose.dev.yml up --no-deps --build --force-recreate -d portal