rs.initiate(
   {
      _id: "rs-config-server",
      configsvr: true,
      version: 1,
      members: [
         { _id: 0, host : "practicum2-configsvr-1:27017" },
         { _id: 1, host : "practicum2-configsvr-2:27017" }
      ]
   }
)