#!/bin/sh
docker-compose -f docker-compose.common.yml -f docker-compose.prod.yml $@
