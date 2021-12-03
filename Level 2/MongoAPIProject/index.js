const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = "imdb";

async function main(){

    await client.connect();
    console.log("erver coSnnection established");

    const db = client.db(dbName);
    const collection = db.collection('movies');
    const result = await collection.find({"name":"abcd1"}).toArray();

    return result;
}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());
