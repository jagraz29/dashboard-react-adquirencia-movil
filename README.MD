## Para poder hacer commit es importante instalar de forma global en tu maquina

```
npm install -g @commitlint/cli @commitlint/config-conventional
```

## usar el terminal para hacer cada commit

## docker

# build

```
make docker-compose -f docker-compose-debug.yml --env-file ./docker/api.env up -d
```
# start
```
docker-compose -f docker-compose-debug.yml --env-file ./docker/api.env start
```
# stop
```
docker-compose -f docker-compose-debug.yml --env-file ./docker/api.env stop
```
