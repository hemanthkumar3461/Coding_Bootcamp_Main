const express = require("express");
const app= express();
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))

app.use(express.static('public'));
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
// Database Name
const dbName = 'gym';
//Get API
//-------------------------------------------
app.get("/members", function(req,res){
console.log(req.query)

async function main() {
  await client.connect();
  console.log("Server connected happily")
  // Use connect method to connect to the server
  const db = client.db(dbName)
  const collection = await newFunction();
  //const findResult = await collection.find({"name":req.query.name}).toArray();
  const findResult = await collection.find({}).toArray();
  
  // the following code examples can be pasted here...
  return findResult;
}
main()
  .then((result)=>res.send(result))
  .catch(console.error)
  .finally(() => client.close());

})
//-------------------------------------------
 app.delete("/members", function(req,res){
async function main() {
  const collection = await newFunction();
  const deletionResult = await collection.deleteOne({"name":req.query.name});

  // the following code examples can be pasted here...

  return deletionResult;
}

main()
  .then((result)=>res.send(result))
  .catch(console.error)
  .finally(() => client.close());
    
 })
//-------------------------------------------
 app.post("/members", function(req,res){

  async function main() {
      console.log(req.body);
      const collection = await newFunction();
      const insertionResult = await collection.insertOne(req.body);
      // the following code examples can be pasted here...
    
      return insertionResult;
    }
    main()
      .then((result)=>res.send(result))
      .catch(console.error)
      .finally(() => client.close());
  
})
//-------------------------------------------
app.put("/members", function(req,res){

  //res.status(200).send({"age":3});
  async function main() {

    const collection = await newFunction();
    const UpdatedResult = await collection.updateOne({"name":req.body.name,"age":req.body.age},{$set:{"name":"QWERTY"}});
 //Mongo 

    return UpdatedResult;
  }
  main()
  .then((result)=>res.send(result))
  .catch(console.error)
  .finally(() => client.close());

})

 async function newFunction() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('members');
    return collection;
}


app.listen(4000);


//Onclick of Register button, i need to send form data to post api
//onclick of show members, I should make get api call and fetch all the list of members in members collection

//----------------------------

//1. We can make by default a get api call from browser
//2. We can give form action and method attributes
//3. We need to make Ajax call.