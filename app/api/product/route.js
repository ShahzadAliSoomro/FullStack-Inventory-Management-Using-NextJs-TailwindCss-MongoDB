import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  // Replace the uri string with your connection string.
  // const uri = "mongodb+srv://shahzadhussain1731043:StPkSzxUeB7bm9X8@cluster0.vxv0jm1.mongodb.net/";
  const uri =
    "mongodb+srv://shahzadhussain1731043:<password>@cluster0.vxv0jm1.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);
  console.log({ client });
  try {
    // const database = client.db('stock');
    // const inventory = database.collection('inventory');
    // // Query for a movie that has the title 'Back to the Future'
    // const query = {  }
    // const products = await inventory.find(query).toArray();
    return NextResponse.json({ success: true });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function POST(request) {
  // Replace the uri string with your connection string.
  let body = await request.json();

  const uri =
    "mongodb+srv://mongodb:iSFluA6UhDtcm3VD@cluster0.sspuss0.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    const database = client.db("stock");
    console.log({database})
    const inventory = database.collection("inventory");
    console.log({inventory})
    // const product = await inventory.insertOne(body);
    // console.log({ product });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.log({ err });
    return NextResponse.json({ err, ok: false });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
