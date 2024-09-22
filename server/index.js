const path = require("path");

require('dotenv').config({ path: path.resolve(__dirname, ".env") })

const express = require("express");

const cors = require("cors");

const api = require("./api");

const { connectMongoDB } = require("./db/mongoDB.js");
// const initializeMongoDB = require("./db/init");


const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());



const initialize = async () => {
  await connectMongoDB();
  app.use("/api", api);

  app.listen(port, () => {
    console.log("Server has been started on port " + port + ".");
  });
}

initialize();