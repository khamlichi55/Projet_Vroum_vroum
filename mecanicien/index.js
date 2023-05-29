const express = require("express");
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Mecancien = require('./model/Mecanicien');


const routemecanicien = require("./router/Mecanicien_Router");
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use("", routemecanicien);


mongoose.connect(
    'mongodb://0.0.0.0:27017/vroum_vroum',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then(() => console.log('mecanicien Connected to MongoDB'))
    .catch(e => console.log(e));


app.listen(3030, () => {
    console.log("mecanicien listening on port 3030");
}
);