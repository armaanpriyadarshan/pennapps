const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const dbURI = process.env.DB_URI;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(dbURI);
  } catch (err) {
    console.error(err);
  }
}

module.exports = { connectMongoDB };