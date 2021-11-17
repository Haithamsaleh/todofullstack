const express=require("express");
const{
    getAllTodos,
    getDoneTodo,
    createNewTodo,
    updateTodoDes,
    deletTodo,
}= require("./../controllers/todosControllers");

const getAllTodosMiddleware = (req,res,next)=>{
    console.log("get all todos");
    next();
};
const todoRouter= express.Router();

todoRouter.get("/todos",getAllTodosMiddleware, getAllTodos);
todoRouter.get("/done", getDoneTodo);
todoRouter.post("/todos", createNewTodo);
todoRouter.put("/:id", updateTodoDes);
todoRouter.delete("/:id", deletTodo);





module.exports = todoRouter;