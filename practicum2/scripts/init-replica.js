rs.initiate(
   {
      _id: "shard_replica",
      version: 1,
      members: [
         { _id: 0, host : "practicum2-shard_replica-1:27017" },
         { _id: 1, host : "practicum2-shard_replica-2:27017" }
      ]
   }
)