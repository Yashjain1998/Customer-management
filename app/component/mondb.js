const { MongoClient } = require("mongodb");

async function connectToDB() {
  const uri = process.env.uri;
  const client = new MongoClient(uri);
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log("Connected to MongoDB successfully!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

// Call the function to connect to MongoDB
module.exports = connectToDB();
