const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/index")
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", mainRouter)
console.log("welcome to rapidPay API");

app.listen(process.env.PORT, () => { console.log(`server listening on port ${process.env.PORT}`) })
