const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = 3000;

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let collection;

async function start() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("myDatabase");
    collection = db.collection("items");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

app.use(cors());
app.use(express.json());

// GET endpoint --front end HEADER component
app.get("/data", async (req, res) => {
  const items = await collection.find().toArray();
  res.json(items);
});

// POST endpoint --front end SelectedItems component
app.post("/data", async (req, res) => {
  const result = await collection.insertOne(req.body);
  res.json({ insertedId: result.insertedId });
});

// DELETE endpoint --front end Header>Modal component
app.delete("/data/:id", async (req, res) => {
  const { ObjectId } = require("mongodb");
  const result = await collection.deleteOne({
    _id: new ObjectId(req.params.id),
  });
  res.json({ deletedCount: result.deletedCount });
});

start();
