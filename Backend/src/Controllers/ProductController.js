const Product = require("../Models/ProSchema");

const getproducts =async (req, res) =>{
    try {
       const category = req.params.category;
       console.log("category", category);
       const products =await Product.find({category: category});
       console.log("products", products);
       return res.send( products);
    } catch (error) {
        throw error;
    }
}

const addproduct = async (req, res) =>{
    try {
        const obj = req.body;
        const product = await Product.create(obj);
        return res.send(product);
    } catch (error) {
        throw error;
    }
}

module.exports = {getproducts, addproduct};