const express=require("express");
const{
    getAllTodos,
    getDoneTodo,
}= require("./../controllers/todosControllers");

const getAllTodosMiddleware = (req,res,next)=>{
    console.log("get all todos");
    next();
};
const todoRouter= express.Router();

todoRouter.get("/",getAllTodosMiddleware, getAllTodos);
todoRouter.get("/done", getDoneTodo);


module.exports = todoRouter;