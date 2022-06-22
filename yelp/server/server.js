require("dotenv").config();
const express = require("express");
const morgan = require("morgan"); 
const db = require("./db");

const app = express();

app.use(express.json());



app.get("/api/v1/resturants", async (req,res)=>{

    try{

    const result = await db.query("select * from resturants");
    // console.log(rest);
    res.status(200).json({
        status: "success",
        results : result.rows.length,
        data:{
            resturants : result.rows
        }
    });

    } catch(err){
        console.log(err);
    }
    
});

//get resturatnt 
app.get("/api/v1/resturants/:id", async (req,res) =>{

    try{
        const result = await db.query("select * from resturants where id = $1", [req.params.id]);
        res.status(200).json({
            status:"success",
            resturants : result.rows[0]
        });
    }
    catch(err){
        console.log(err);
    }
    
    
});

// create resturant

app.post("/api/v1/resturants", async (req,res)=>{
    console.log(req.body );
    try{
        const result = await db.query("insert into resturants (name, location, price_range) values ($1, $2, $3) returning *", 
        [req.body.name,req.body.location, req.body.price_range]);

        res.status(201).json({
            status:"success",
            resturants :  result.rows[0]
        });

    }
    catch(err){
        console.log(err);
    }
    
});

//update resturants
app.put("/api/v1/resturants/:id", async (req,res)=>{
    
    try{
        const results = await db.query("UPDATE resturants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
        [req.body.name, req.body.location, req.body.price_range, req.params.id]);
        res.status(200).json({
            status:"success",
            resturants : results.rows[0]
        });
    }
    catch(err){
        console.log(err);
    }
    
});

//delete resturants
app.delete("/api/v1/resturants/:id",async (req,res)=>{
    try{
        const results = await db.query("DELETE FROM resturants where id=$1", [req.params.id]);
        res.status(204).json({
            status : "success"
        })
    }
    catch(err){
        console.log(err);
    }
    
});

const port = process.env.PORT;
app.listen(port, () =>{
    console.log(`server is up listening to port ${port }`);
} );
