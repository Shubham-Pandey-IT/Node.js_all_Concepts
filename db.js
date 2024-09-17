const mongoose = require ("mongoose");

require('dotenv').config();

//Defining the Mongoose URL.

//const mongoURL = "process.env.DB_LOCAL_URL"//mydatabase is database name.
const mongoURL = process.env.DB_URL;
mongoose.connect(mongoURL,{});

const db = mongoose.connection;

//Define Event Listener for database connection

db.on('connected',()=>{
    console.log("db connected");
});
db.on('disconnected',()=>{
    console.log("db disconnected");
});
db.on('error',()=>{
    console.log("Error on connection");
});

//exporting db 
module.exports = db;