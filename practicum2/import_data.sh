# create collecction script
docker-compose exec router sh -c "mongo < /scripts/collection.js"
# import data
docker-compose exec router sh -c "mongoimport --port 27017 -d taxi -c rides --type csv --file /data/rides.csv --headerline"
