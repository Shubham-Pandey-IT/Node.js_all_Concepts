const express = require('express');
const app = express.Router();

const menu = require('../models/menuItems');

app.post('/menu',async(req,res)=>{
    try{
        const data = req.body;
        const menuData = new menu(data);
        const responce =await menuData.save();

        console.log("data saved");
        res.status(200).json(responce);
    }catch(err){
        console.log(err);
        res.status(500).json({error : 'internal server error'});
    }
})


app.get('/menu',async(req,res)=>{
    try{
        const data =await menu.find();
        console.log("menu data Fetched");
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error : 'internal server error'});
    }
})

module.exports = app;
