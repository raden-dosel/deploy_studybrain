const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoType = {
  PERSONAL: "Personal",
  WORK: "Work",
  SCHOOL: "School",
  FUN: "Fun",
  HEALTH: "Health",
  OTHER: "Other",
};

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    type: {
      type: String,
      enum: Object.values(TodoType),
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Todo", todoSchema);
