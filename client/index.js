const express = require("express");
const cors = require("cors");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const client = require("./model/Client");

const routeclient = require("./router/Clients_Router");

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "x-auth-token,content-type");

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use("", routeclient);

mongoose
  .connect("mongodb://0.0.0.0:27017/vroum_vroum", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("client Connected to MongoDB"))
  .catch((e) => console.log(e));

app.listen(3031, () => {
  console.log("client listening on port 3031");
});
