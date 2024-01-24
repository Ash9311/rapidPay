const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/index")
const { PORT } = require('./config');
const app = express();

app.use("/api/v1", mainRouter)
app.use(express.json());
app.use(cors());


app.listen(PORT, () => { console.log(`server listening on port ${PORT}`) })
