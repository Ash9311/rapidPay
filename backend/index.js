const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/index")
const app = express();

app.use("/api/v1", mainRouter)
app.use(express.json());
app.use(cors());

module.exports = { mainRouter }

app.listen(() => { console.log(`server listening on port 3000`); })