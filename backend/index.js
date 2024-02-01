const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/index")


const { PORT } = require('./config');
const bodyParser = require('body-parser');
const app = express();



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", mainRouter)


app.listen(PORT, () => { console.log(`server listening on port ${PORT}`) })
