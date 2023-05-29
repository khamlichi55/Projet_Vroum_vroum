const express = require("express");
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const rdv = require('./model/Rendez_vous');


const route_rdv = require("./router/Rendez_vous_Router");
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use("", route_rdv);


mongoose.connect(
    'mongodb://0.0.0.0:27017/vroum_vroum',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then(() => console.log('rdv Connected to MongoDB'))
    .catch(e => console.log(e));


app.listen(3032, () => {
    console.log("rdv listening on port 3032");
}
);