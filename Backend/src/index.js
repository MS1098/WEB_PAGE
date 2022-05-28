const express = require("express")


const productRoute =require("./Routes/ProductRoute");
     

const app = express()

const ProductController=require("./Controllers/ProductController");

app.use(express.json())

app.get("/getproducts/:category", async (req,res)=>{
    try{
        const category=req.params.category;
        const products=await ProductController(category)
        return res.send({
          product:products
        })
    }catch(err){
       console.log(err)
       throw err;
    }
});


module.exports = app;