/**TASK4 QUERY TOP 100 drivers by rating */
db = db.getSiblingDB('taxi')
DBQuery.shellBatchSize = 100

agg_base = db.rides.aggregate([
                    { '$match': {'driver_rate':{'$ne':null}}},
                    { '$group': { '_id': "$driver_id", 'driver_avg_rate': { '$avg': "$driver_rate" }}},
                    { '$sort': { 'driver_avg_rate': -1 } },
                    { '$limit' : 100 }
                   ])

printjson(agg_base)