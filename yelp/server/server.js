require("dotenv").config();
const express = require("express");
const morgan = require("morgan"); 
const db = require("./db");

// const app = express();

app.use(express.json());



app.get("/api/v1/resturants",(req,res)=>{
    res.status(200).json({
        status: "success",
        data:{
            resturants : ["mcd", "wendys"]
        }
    })
});

//get resturatnt 
app.get("/api/v1/resturants/:id", (req,res) =>{
    console.log(req);
    res.status(200).json({
        status:"success",
        resturants : "Mcd"
    });
});

// create resturant

app.post("/api/v1/resturants", (req,res)=>{
    console.log(req.body );
    res.status(201).json({
        status:"success",
        resturants : "Mcd"
    });
});

//update resturants
app.put("/api/v1/resturants/:id", (req,res)=>{
    res.status(200).json({
        status:"success",
        resturants : "Mcd"
    });
});

//delete resturants
app.delete("/api/v1/resturants/:id",(req,res)=>{
    res.status(204).json({
        status : "success"
    })
});

const port = process.env.PORT;
app.listen(port, () =>{
    console.log(`server is up listening to port ${port }`);
} );
