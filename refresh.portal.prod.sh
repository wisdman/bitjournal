#!/bin/sh

# Down and remove
docker-compose -f docker-compose.common.yml -f docker-compose.dev.yml rm -sf rss
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf portal-back-a
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf portal-back-b
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf portal-back-c
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf portal

# Up
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d rss
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d portal-back-a
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d portal-back-b
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d portal-back-c
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d portal
