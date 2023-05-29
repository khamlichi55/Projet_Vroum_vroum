const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
const authRouter = require('./router/auth');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRouter);



mongoose.connect(
    'mongodb://0.0.0.0:27017/vroum_vroum',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then(() => console.log('Auth Connected to MongoDB'))
    .catch(e => console.log(e));


app.listen(PORT, () => {
    console.log(`Auth listening on port ${PORT}`);
}
);

