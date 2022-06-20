require("dotenv").config();
const express = require("express");

const app = express();

app.get("/getResturants",(req,res)=>{
    console.log("get all resturants");
})
const port = process.env.PORT;
app.listen(port, () =>{
    console.log(`server is up listening to port ${port }`);
} );