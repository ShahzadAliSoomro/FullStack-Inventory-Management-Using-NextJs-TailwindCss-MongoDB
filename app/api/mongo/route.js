import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, query) {
//   const uri = "mongodb+srv://Dev-Shahzad:<password>@cluster0.sspuss0.mongodb.net/";
  const uri = "mongodb+srv://mongodb:iSFluA6UhDtcm3VD@cluster0.sspuss0.mongodb.net/";
  const client = new MongoClient(uri);
  try {
    const database = client.db('harry');
    const movies = database.collection('inventory');
    const movie = await movies.find(query).toArray();
    console.log(movie);
    return NextResponse.json({"a": 34, movie})
  } finally {
    await client.close();
  }
}