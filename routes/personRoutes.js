const express = require('express');
const router = express.Router();
const person = require('../models/person');

router.post('/',async(req,res)=>{
    try{
        const data = req.body;

        const newPerson = new person(data);
        const responce = await newPerson.save();

        console.log("data saved");
        res.status(200).json(responce);
    }catch(err){
        console.log(err);
        res.status(500).json({erro : 'internal server error'});
    }
})

router.get('/',async(req,res)=>{
    try{
        const data =await person.find();
        console.log("data Fetches");
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error : 'internal server error'});
    }
})

router.get('/:workType',async(req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType == 'chef' || workType=='waiter'|| workType == 'manager' ){
            const responce = await person.find({work : workType});
            console.log("Responce Fetched");
            res.status(200).json(responce);
        }else{
            res.status(404).json({error:"Invalid Work Type"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error : 'internal server error'});
    }
})

// update....

router.put('/:id' , async(req,res)=>{
    try{
        const person_id = req.params.id;
        const updatedpersonData = req.body;

        const updatedPerson = await person.findByIdAndUpdate(
            person_id ,
            updatedpersonData,
            {
                new:true,
                runValidators:true
            }
        );
        if(!updatedPerson){
            return res.status(404).json({error:"person not found"});
        }

        res.json(updatedPerson);

    }catch(err){
        console.log(err);
        res.status(500).json({error : 'internal server error'});
    }
})

//Delete.....

router.delete('/:id',async(req,res) =>{
    try{
        const person_id = req.params.id;

        const deletedPerson = await person.findByIdAndDelete(person_id);
        if(!deletedPerson){
            res.status(404).json({error:"person not found"});
        }
        res.json("Deleted successfully");
    }catch(err){
        console.log(err);
        res.status(500).json({error : 'internal server error'});
    }
})

module.exports = router;