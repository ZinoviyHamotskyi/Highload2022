docker-compose exec configsvr sh -c "mongo < /scripts/init-configserver.js"
docker-compose exec shard_main sh -c "mongo < /scripts/init-main.js"
docker-compose exec shard_replica sh -c "mongo < /scripts/init-replica.js"
docker-compose exec router sh -c "mongo < /scripts/init-router.js"
