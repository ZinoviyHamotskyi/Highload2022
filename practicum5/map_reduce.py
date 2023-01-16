import json
from pyspark.sql import SparkSession, DataFrame

RIDES_PATH = 'data/rides.csv'

def top_k_drivers(df: DataFrame, k: int):
    return df.where(df.driver_rate \
            .isNotNull()) \
                .orderBy(df.driver_rate, ascending=False) \
                    .select('driver_id', 'driver_rate') \
                        .limit(k) \
                            .rdd.map(lambda row: {'driver_id': row[0], 'driver_rate': row[1]})


if __name__ == "__main__":
    spark = SparkSession.builder \
            .master("local") \
            .appName("SparkDemo") \
            .config("") \
            .getOrCreate() 
    df = spark.read.csv(RIDES_PATH, header=True)
    #top-100 drivers
    with open('result/top_100_drivers.json', 'w') as f:
        f.write(json.dumps(top_k_drivers(df, 100).collect()))



