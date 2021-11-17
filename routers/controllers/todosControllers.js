const fs = require("fs");
let todos = [];
fs.readFile("./db/todos.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    todos = JSON.parse(data.toString());
  }
});

const getAllTodos = (req, res) => {
  res.status(200).json(todos);
};
const getDoneTodo = (req, res) => {
  res.status(200).json(todos.filter((todo) => todo.done));
};
const createNewTodo = (req, res) => {
    const todo = {
      id: todos.length + 1,
      task: req.body.task,
      done: false,
    };
    todos.push(todo);
  
    fs.writeFile("./db/todos.json", JSON.stringify(todos), (err) => {
      if (err) {
        res.status(400).json("bad request");
      } else {
        res.status(200).json(todos);
      }
    });
  };
  
const updateTodoDes = (req, res) => {
    const { id } = req.params;
    const { task, done } = req.body;
    let check = false;
  
    todos.forEach((todo) => {
      if (todo.id == id) {
        if (task != undefined) todo.task = task;
        if (isDel != undefined) todo.done = done;
        check = true;
      }
    });
  
    if (check) {
      fs.writeFile("./db/todos.json", JSON.stringify(todos), (err) => {
        if (err) {
          res.status(400).json("bad request");
        } else {
          res.status(200).json(todos);
        }
      });
    } else {
      res.status(404).json("task not found");
    }
  };
  const deletTodo = (req, res) => {
    const { id } = req.params;
    let check = false;
  
    movies.forEach((todo) => {
      if (todo.id == id) {
        todo.done = true;
        check = true;
      }
    });
  
    if (check) {
      fs.writeFile("./db/todos.json", JSON.stringify(todos), (err) => {
        if (err) {
          res.status(400).json("bad request");
        } else {
          res.status(200).json(todos);
        }
      });
    } else {
      res.status(404).json("task not found");
    }
  };
module.exports = {
  getAllTodos,
  getDoneTodo,
  createNewTodo,
  updateTodoDes,
  deletTodo,
};
