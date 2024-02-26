const Category = require("../models/category_Model");
const Note = require("../models/note_Model");
const mongoose = require("mongoose");

//Get all notes
const get_AllNotes = async (req, res) => {
  try {
    const notes = await Note.find().populate("category"); // Populate category data
    res.json({ notes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Get all notes by category
const get_AllNotesByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const notes = await Note.find({ category: categoryId }).populate(
      "category"
    ); // Populate category data
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Get a single Note
const get_SingleNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id).populate("category"); // Populate category data
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json({ note });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Post a new Note
const create_Note = async (req, res) => {
  try {
    let { title, content, category, createdAt } = req.body;

    // Check if the category property is null
    if (!category) {
      // If null, get the default category
      const defaultCategory = await Category.findOne({ isDeletable: false });

      // If default category exists, assign its ID to the category property
      if (defaultCategory) {
        category = defaultCategory._id;
      }
    }

    const newNote = new Note({ title, content, category, createdAt });
    await newNote.save();

    res.status(201).json({ note: newNote });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
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
  get_AllNotesByCategory,
  get_SingleNote,
  delete_Note,
  update_Note,
};
