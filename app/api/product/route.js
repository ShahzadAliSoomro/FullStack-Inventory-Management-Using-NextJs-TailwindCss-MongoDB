import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  
// Replace the uri string with your connection string.
const uri = "mongodb+srv://mongodb:iSFluA6UhDtcm3VD@cluster0.sspuss0.mongodb.net/";
const client = new MongoClient(uri);
  try {
    const database = client.db('stock');
    const inventory = database.collection('inventory');
    // Query for a movie that has the title 'Back to the Future'
    const query = {  }
    const allproducts = await inventory.findOne(query).toArray();
    return NextResponse.json({ allproducts})
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function POST(request) {
  
    // Replace the uri string with your connection string.
    let body = await request.json()
    console.log(body)
    const uri = "mongodb+srv://mongodb:iSFluA6UhDtcm3VD@cluster0.sspuss0.mongodb.net/";
    const client = new MongoClient(uri);
      try {
        const database = client.db('stock');
        const inventory = database.collection('inventory');
        const product = await inventory.insertOne(body)
        return NextResponse.json({product, ok: true})
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }