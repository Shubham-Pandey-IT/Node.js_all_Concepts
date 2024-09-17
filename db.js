const mongoose = require ("mongoose");

//Defining the Mongoose URL.

const mongoURL = "mongodb://localhost:27017/hotels"//mydatabase is database name.

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