rs.initiate(
   {
      _id: "shard_main",
      version: 1,
      members: [
         { _id: 0, host : "practicum2-shard_main-1:27017" },
         { _id: 1, host : "practicum2-shard_main-2:27017" },
		   { _id: 2, host : "practicum2-shard_main-3:27017" },
		   { _id: 3, host : "practicum2-shard_main-4:27017" },
      ]
   }
)