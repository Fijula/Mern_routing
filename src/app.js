const express = require("express");
require("../src/db/conn")  //create an instance of connection

 const MensRanking = require("../src/models/race")  //instance of collection
const app =express();
const PORT = process.env.PORT || 3000;

// app.get("/",async(req,res)=>{
//     res.send("hello")
// })

app.use(express.json());

// handle ger request
app.get("/mens",async(req,res)=>{
    try{
        const getMens = await MensRanking.find({});
      
    res.send(getMens);
   
    }
    catch(e){
res.status(400).send(e)
    }
})
// handle get for particular
app.get("/men/:id",async(req,res)=>{
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
app.patch("/mens/:id",async(req,res)=>{
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
app.post("/mens",async(req,res)=>{
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




// configure and listen

app.listen(PORT,()=>{
    console.log(`Connection Succcesful at : ${PORT}`)
})
