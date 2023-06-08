const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Mecancien = require("./model/Mecanicien");

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

const routemecanicien = require("./router/Mecanicien_Router");
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use("", routemecanicien);

mongoose
  .connect("mongodb://0.0.0.0:27017/vroum_vroum", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mecanicien Connected to MongoDB"))
  .catch((e) => console.log(e));

app.listen(3030, () => {
  console.log("mecanicien listening on port 3030");
});
