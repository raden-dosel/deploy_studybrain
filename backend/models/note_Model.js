const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NoteCategory = {
  PERSONAL: "Personal",
  WORK: "Work",
  SCHOOL: "School",
  FUN: "Fun",
  HEALTH: "Health",
  OTHER: "Other",
};

const noteSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      enum: Object.values(NoteCategory),
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);
