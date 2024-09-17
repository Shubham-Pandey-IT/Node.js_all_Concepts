const mongoose = require ("mongoose");
const { type } = require("os");
const { stringify } = require("querystring");

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: String
    },
    work:{
        type: String,
        enum:['chef', 'waiter', 'manager'],
        require: true
    },
    mobile:{
        type: String,
        require: true 
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    address:{
        type: String
    },
    salary:{
        type: String,
        require: true 
    }
});

//create person model
const person = mongoose.model('person',personSchema);
module.exports = person;