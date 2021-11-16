const express=require("express");
const{
    getAllTodos,
}= require("./../controllers/todosControllers");
const getAllTodosMiddleware = (req,res,next)=>{
    console.log("get all todos");
    next();
};
const todoRouter= express.Router();
todoRouter.get("/",getAllTodosMiddleware, getAllTodos);


module.exports=todoRouter;