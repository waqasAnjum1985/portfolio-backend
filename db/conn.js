const mongoose = require("mongoose");

const db = process.env.MONGO_CONN;

const connectDB = async () => {
  try {
    await mongoose.connect(db);

    console.log("Mongo DB connected successfully...");
  } catch (err) {
    console.log("err while connecting Mongo DB", err);
  }
};

module.exports = connectDB;
