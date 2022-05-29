const {Router} = require("express");
const {getproducts, addproduct} = require("../Controllers/ProductController")
const ProductRoute = Router();

ProductRoute.route("/getproducts/:category").get(getproducts);

ProductRoute.route("/addproduct").post(addproduct)
module.exports = ProductRoute;