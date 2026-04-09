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
const { connectDB } = require("./db/conn.js");
const portfolioRouter = require("./routes/portfolioRoute.js");
const mongoose = require("mongoose");
const { connectionDropped } = require("./db/conn.js");
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());

app.use(express.json());


app.get("/api/portfolio", connectionDropped, portfolioRouter);
app.use("/api/portfolio", connectionDropped, portfolioRouter);

//for local host server , will remain comment out in case of production
/*app.listen(PORT, () => {
  connectDB();
  console.log(`SERVER is running at http://localhost:${PORT}`);
});*/

module.exports = app;
