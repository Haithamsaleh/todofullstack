const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios");

const todoRouter=require("./routers/routes/todosRoute");

const app = express();

app.use(express.json());
// app.use(appMiddleware);
app.use(cors());

app.use(morgan("dev"));

app.use("/todos", todoRouter)


// const appMiddleware = (req,res,next)=>{
//   console.log("todos");
//   next();
// }
const todoMiddleware = (req, res, next) => {
  console.log("todos");
  next();
};

app.use("/todos",todoMiddleware, todoRouter)

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
