const express=require("express");

const ProductController=require("../Controllers/ProductController");


const productRoute=express.Router();
  productRoute.route("/getproducts/:category").get( async (req,res)=>{
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
  })
      
module.export =productRoute;
     
 