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
module.exports = {
  getAllTodos,
  getDoneTodo,
};
