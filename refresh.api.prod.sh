#!/bin/sh

# Down and remove
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf api-ads-a
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf api-ads-b
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf api-auth-a
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf api-auth-b
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf api-coins-a
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf api-coins-b
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf api-publication-a
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf api-publication-b
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf api-raw-a
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf api-raw-b
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf api-users-a
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf api-users-b
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf api-video-a
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf api-video-b
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml rm -sf api

# Up
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d api-ads-a
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d api-ads-b
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d api-auth-a
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d api-auth-b
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d api-coins-a
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d api-coins-b
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d api-publication-a
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d api-publication-b
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d api-raw-a
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d api-raw-b
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d api-users-a
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d api-users-b
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d api-video-a
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d api-video-b
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml up --no-deps --build --force-recreate -d api

