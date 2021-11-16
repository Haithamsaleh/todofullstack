const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios");
const { application } = require("express");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/todos",(req,res)=>{
    console.log(res);
    res.status(200).json(todos)
})







const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
