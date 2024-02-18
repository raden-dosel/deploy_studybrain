const express = require("express");
const Note = require("../models/note_Model");
const {
  create_Note,
  get_AllNotes,
  get_SingleNote,
  delete_Note,
  update_Note,
} = require("../controllers/note_Controller");

const router = express.Router();

//Get all Todos
router.get("/", get_AllNotes);

//Get a single Todo
router.get("/:id", get_SingleNote);

//Post a new Todo
router.post("/", create_Note);

//Delete a Todo
router.delete("/:id", delete_Note);

//Update a Todo
router.patch("/:id", update_Note);

module.exports = router;
