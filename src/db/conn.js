const mongoose = require("mongoose");
// olympics database ....connect returns a promise
mongoose.connect("mongodb://localhost:27017/olympics",{
    // deprecation warning
    // useCreateIndex:true,
    // useNewUrlParser:true,
    // useUnifiedTopology:true
}).then(()=>{
console.log("Connected to db")
}).catch(()=>{
    console.log("not connected")
})