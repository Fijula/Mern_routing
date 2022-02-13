const express = require("express");
const router = new express.Router();


// handle ger request
router.get("/mens",async(req,res)=>{
    try{
        const getMens = await MensRanking.find({});
      
    res.send(getMens);
   
    }
    catch(e){
res.status(400).send(e)
    }
})
// handle get for particular
router.get("/men/:id",async(req,res)=>{
    try{
const _id = req.params.id;

        const getMen = await MensRanking.findById({_id});
      
    res.send(getMen);
   
    }
    catch(e){
res.status(400).send(e)
    }
})

// patch req 
router.patch("/mens/:id",async(req,res)=>{
    try{
const _id = req.params.id;

        const getMen = await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true
        });
      
    res.send(getMen);
   
    }
    catch(e){
res.status(400).send(e)
    }
})



// we will handle post request
router.post("/mens",async(req,res)=>{
    try{
    const addingMensRecords = new MensRanking(req.body);
    console.log(req.body)
    const insertMens = await addingMensRecords.save(); //save tot database
    res.status(201).send(insertMens);
   
    }
    catch(e){
res.status(400).send(e)
    }
})
// delete the request
app.delete("/mens/:id",async(req,res)=>{
    try{
        const getMen = await MensRanking.findByIdAndDelete(req.params.id);
      
    res.send(getMen);
   
    }
    catch(e){
res.status(500).send(e)
    }
})

module.exports = router;