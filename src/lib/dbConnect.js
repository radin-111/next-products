import { MongoClient, ServerApiVersion } from "mongodb";
import React from "react";

export default function dbConnect(collection) {
  const uri = process.env.URI;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.DB_NAME).collection(collection);
}
