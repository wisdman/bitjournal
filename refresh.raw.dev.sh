#!/bin/sh

# Down and remove
docker-compose -f docker-compose.common.yml -f docker-compose.dev.yml rm -sf raw-back-a
docker-compose -f docker-compose.common.yml -f docker-compose.dev.yml rm -sf raw-back-b
docker-compose -f docker-compose.common.yml -f docker-compose.dev.yml rm -sf raw-back-c
docker-compose -f docker-compose.common.yml -f docker-compose.dev.yml rm -sf raw

# Up
docker-compose -f docker-compose.common.yml -f docker-compose.dev.yml up --no-deps --build --force-recreate -d raw-back-a
docker-compose -f docker-compose.common.yml -f docker-compose.dev.yml up --no-deps --build --force-recreate -d raw-back-b
docker-compose -f docker-compose.common.yml -f docker-compose.dev.yml up --no-deps --build --force-recreate -d raw-back-c
docker-compose -f docker-compose.common.yml -f docker-compose.dev.yml up --no-deps --build --force-recreate -d raw
