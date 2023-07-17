import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, query) {
  const uri = "mongodb+srv://shahzadhussain1731043:StPkSzxUeB7bm9X8@cluster0.vxv0jm1.mongodb.net/";
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