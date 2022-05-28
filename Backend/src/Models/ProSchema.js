const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        category:{type:String, required:true},
        image:{type:String, required:true},
        name: {type: String, required: true},
        productId:{type:String, required:true}
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const Product = mongoose.model("product", productSchema);

module.exports = Product;