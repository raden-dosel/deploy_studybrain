const express = require("express");
const Todo = require("../models/todo_Model");
const {
  create_Todo,
  get_AllTodos,
  get_SingleTodo,
  delete_Todo,
  update_Todo,
} = require("../controllers/todo_Controller");

const router = express.Router();

//Get all Todos
router.get("/", get_AllTodos);

//Get a single Todo
router.get("/:id", get_SingleTodo);

//Post a new Todo
router.post("/", create_Todo);

//Delete a Todo
router.delete("/:id", delete_Todo);

//Update a Todo
router.patch("/:id", update_Todo);

module.exports = router;
