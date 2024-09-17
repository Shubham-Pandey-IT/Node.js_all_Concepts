const express = require("express");
const app = express();
const db = require ("./db");
require('dotenv').config();


const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const menu = require("./models/menuItems");
const { error } = require("console");

app.get("/",(req,res)=>{
    res.send("Hello Developers!!");
})

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/',menuRoutes);

app.listen(PORT,()=>{
    console.log("listening to port 3000");
});