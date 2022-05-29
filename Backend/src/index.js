const express = require("express");
const ProductRoute = require("./Routes/ProductRoute")
const app = express();

app.use(express.json());

app.use("/products", ProductRoute);

module.exports = app;