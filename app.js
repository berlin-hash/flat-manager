const express = require('express');
const app = express();
const PORT = 8000;
const path = require('path')
var exphbs  = require('express-handlebars');
const mongoose = require('mongoose')
require('dotenv/config')
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(bodyParser.json())
app.use(cors());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'static')))

app.use('/', require(path.join(__dirname, './routes/rooms')))

mongoose.connect (
    process.env.DB_CONNECTION2,
    ()=> {
    console.log("Connected to db!!");
})


app.listen(PORT, (req, res) => {
    console.log(`Server listening at ${PORT}`);
})