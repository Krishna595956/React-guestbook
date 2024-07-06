const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const bodyparser = require("body-parser");

const url =
  "mongodb+srv://sacet:1234567890@sacet.mq3py32.mongodb.net/?retryWrites=true&w=majority&appName=SACET";
const cluster = new MongoClient(url);
const database = cluster.db("sacet");
const collection = database.collection("Integration");

const app = express();
app.use(bodyparser.json());
app.use(cors());

app.post("/register", async (req, res) => {
  // const email=req.body.email;
  // const password=req.body.password;
  try {
    // const {email,password}=req.body;
    const email = req.body.email;
    const password = req.body.password;
    await cluster.connect();
    const response = await collection.findOne({ email: email });
    if (response === null) {
      await collection.insertOne({ email: email, password: password });
      await cluster.close();
      return res.json({ response: "1" });
    } else {
      await cluster.close();
      return res.json({ response: "0" });
    }
  } catch {
    return res.json({ response: "Internal server error" });
  }
});

app.listen(5000, () => {
  console.log("Server started running........");
});
