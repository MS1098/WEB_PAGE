const app = require("./index");
const connect = require("./Config/db");

app.listen("2345", async (req, res)=>{
    try {
        await connect();
        console.log("listening at port 2345");
    } catch (error) {
        throw error;
    }
})