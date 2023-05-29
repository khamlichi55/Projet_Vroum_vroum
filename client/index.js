const express = require("express");
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const client = require('./model/Client');


const routeclient = require("./router/Clients_Router");
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use("", routeclient);


mongoose.connect(
    'mongodb://0.0.0.0:27017/vroum_vroum',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then(() => console.log('client Connected to MongoDB'))
    .catch(e => console.log(e));


app.listen(3031, () => {
    console.log("client listening on port 3030");
}
);