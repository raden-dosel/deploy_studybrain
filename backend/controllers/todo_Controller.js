const Todo = require("../models/todo_Model");
const mongoose = require("mongoose");

//Get all todos
const get_AllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    res.status(200).json({ todos });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

//Get a single Todo
const get_SingleTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ error: "Todo not found" });
    }

    if (!todo) {
      // If todo is not found, send a 404 response
      return res.status(404).json({ error: "Todo not found" });
    }

    // If todo is found, send a 200 response with the todo
    res.status(200).json({ todo });
  } catch (err) {
    // If an error occurs, send a 400 response with the error message
    res.status(400).json({ error: err.message });
  }
};

//Post a new Todo
const create_Todo = async (req, res) => {
  const { title, description, type, isCompleted } = req.body;

  //add doc to db
  try {
    const todo = await Todo.create({
      title,
      description,
      type,
      isCompleted,
    });
    res.status(200).json({ todo });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

//Delete a Todo
const delete_Todo = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ error: "Todo not found" });
    }

    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      // If todo is not found, send a 404 response
      return res.status(404).json({ error: "Todo not found" });
    }

    // If todo is deleted successfully, send a 200 response
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (err) {
    // If an error occurs, send a 400 response with the error message
    res.status(400).json({ error: err.message });
  }
};

//Update a Todo
const update_Todo = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ error: "Todo not found" });
    }

    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!todo) {
      // If todo is not found, send a 404 response
      return res.status(404).json({ error: "Todo not found" });
    }
    // If todo is updated successfully, send a 200 response
    res.status(200).json({ todo });
  } catch (err) {
    // If an error occurs, send a 400 response with the error message
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  create_Todo,
  get_AllTodos,
  get_SingleTodo,
  delete_Todo,
  update_Todo,
};
