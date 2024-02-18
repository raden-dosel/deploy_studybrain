const Note = require("../models/note_Model");
const mongoose = require("mongoose");

//Get all notes
const get_AllNotes = async (req, res) => {
  try {
    const notes = await Note.find({}).sort({ createdAt: -1 });
    res.status(200).json({ notes });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

//Get a single Note
const get_SingleNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ error: "Note not found" });
    }

    if (!note) {
      // If Note is not found, send a 404 response
      return res.status(404).json({ error: "Note not found" });
    }

    // If Note is found, send a 200 response with the Note
    res.status(200).json({ note });
  } catch (err) {
    // If an error occurs, send a 400 response with the error message
    res.status(400).json({ error: err.message });
  }
};

//Post a new Note
const create_Note = async (req, res) => {
  const { title, content, category } = req.body;

  //add doc to db
  try {
    const note = await Note.create({
      title,
      content,
      category,
    });
    res.status(200).json({ note });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

//Delete a Note
const delete_Note = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ error: "Note not found" });
    }

    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      // If Note is not found, send a 404 response
      return res.status(404).json({ error: "Note not found" });
    }

    // If Note is deleted successfully, send a 200 response
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (err) {
    // If an error occurs, send a 400 response with the error message
    res.status(400).json({ error: err.message });
  }
};

//Update a Note
const update_Note = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ error: "Note not found" });
    }

    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!Note) {
      // If Note is not found, send a 404 response
      return res.status(404).json({ error: "Note not found" });
    }
    // If Note is updated successfully, send a 200 response
    res.status(200).json({ note });
  } catch (err) {
    // If an error occurs, send a 400 response with the error message
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  create_Note,
  get_AllNotes,
  get_SingleNote,
  delete_Note,
  update_Note,
};
