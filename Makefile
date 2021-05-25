#!/bin/bash

make docker-build: docker-compose -f docker-compose-debug.yml --env-file ./docker/api.env up -d

make docker-start: docker-compose -f docker-compose-debug.yml --env-file ./docker/api.env start

make docker-stop: docker-compose -f docker-compose-debug.yml --env-file ./docker/api.env stop