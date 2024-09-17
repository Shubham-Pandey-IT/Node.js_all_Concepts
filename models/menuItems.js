const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
        type :String,
        required :true,
        unique:true
    },
    price:{
        type:String,
        required:true
    },
    teste:{
        type: String,
        enum:['sweet', 'sour', 'bitter'],
        require: true
    },
    is_drink:{
        type:Boolean,
        default:false
    }
});

const menu = mongoose.model('menu',menuSchema);
module.exports = menu;