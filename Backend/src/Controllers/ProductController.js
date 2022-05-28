
const Product=require("../Models/ProSchema");
 const ProductController = async (category)=>{
      try{
      const products=await Product.find({category:category});
       return products;
       }catch(err){
       console.log(err);
       throw(err);
      }
}

module.export=ProductController;