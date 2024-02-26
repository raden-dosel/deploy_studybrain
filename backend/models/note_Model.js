const mongoose = require("mongoose");
const Category = require("../models/category_Model");

const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },
  content: {
    type: String,
    trim: true,
  },
  category: {
    type: Schema.Types.ObjectId, // Change the type to ObjectId
    ref: "Category", // Reference to the "Category" model
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Note", noteSchema);
