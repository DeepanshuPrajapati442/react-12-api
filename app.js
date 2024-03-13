require("dotenv").config({path:"./.env"})
const express = require("express");
const app = express();

const PORT = process.env.PORT;
//db connection
require("./models/dbconfig").dbconnection();

app.listen(PORT , ()=>{
console.log(`The server is running on port${PORT}`);

});