const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "tinify";

module.exports = {
  createAlias: function (req, res) {
    async function main() {
      const collection = await getCollection();
      const findResult = await collection
        .find({ alias: req.body.alias })
        .toArray();
      if (findResult.length > 0) {
        throw new Error("Duplicate Alias!");
      } else {
        const insertResult = await collection.insertOne(req.body);
        return insertResult;
      }
    }
    main()
      .then((result) => res.status(200).json({ data: result }))
      .catch((err) => res.status(422).json({ errMsg: "Duplicate Alias!" }))
      .finally(() => client.close());
  },

  redirectURL: function (req, res) {
    async function main() {
      const collection = await getCollection();
      const findResult = await collection
        .find({ alias: req.params.url })
        .toArray();
      if (findResult.length > 0) {
        return findResult;
      } else {
        throw new Error("error in finding alias!");
      }
    }

    main()
      .then((result) => res.redirect(result[0]["longURL"]))
      .catch((err) => {
        console.log(err.message);
        res.status(422).json({ err: err.message });
      })
      .finally(() => client.close());
  },
};

async function getCollection() {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("urls");
  return collection;
}
