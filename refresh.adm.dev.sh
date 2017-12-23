#!/bin/sh

# Down and remove
docker-compose -f docker-compose.common.yml -f docker-compose.dev.yml rm -sf adm

# Up
docker-compose -f docker-compose.common.yml -f docker-compose.dev.yml up --no-deps --build --force-recreate -d adm
