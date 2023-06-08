const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const rdv = require("./model/Rendez_vous");

const route_rdv = require("./router/Rendez_vous_Router");

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

app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use("", route_rdv);

mongoose
  .connect("mongodb://0.0.0.0:27017/vroum_vroum", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("rdv Connected to MongoDB"))
  .catch((e) => console.log(e));

app.listen(8000, () => {
  console.log("rdv listening on port 8000");
});
