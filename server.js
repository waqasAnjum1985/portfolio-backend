//core modules
const express = require("express");
//imported modules
require("dotenv").config();
//local modules
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectDB = require("./db/conn.js");
const portfolioRouter = require("./routes/portfolioRoute.js");
const mongoose = require("mongoose");

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());

app.use(express.json());

//for vercel only as vercel is server less,will remain comment out in case of local host
/*const mongoURL = process.env.MONGO_CONN;

let isConnected;

const connectMongo = async () => {
  try {
    await mongoose.connect(mongoURL);
    isConnected = true;
    console.log("Mongo DB connected successfully...");
  } catch (err) {
    console.log("err while connecting Mongo DB", err);
  }
};

app.use((req, res, next) => {
  if (!isConnected) {
    connectMongo();
  }
  next();
});
app.get("/", (res, req) => {
  res.send("SERVER IS RUNNING");
});*/

app.use("/", portfolioRouter);

//for local host server , will remain comment out in case of production
app.listen(PORT, () => {
  connectDB();
  console.log(`SERVER is running at http://localhost:${PORT}`);
});

//module.exports = app;
