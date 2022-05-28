const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb+srv://mayur1098:mayur123@cluster0.cqmoo.mongodb.net/test");
}

module.exports = connect;