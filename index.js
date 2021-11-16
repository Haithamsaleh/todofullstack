const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { application } = require("express");

const app = express();


app.get("/todo",(req,res)=>{
    res.status(200).json(todo)
})







const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
