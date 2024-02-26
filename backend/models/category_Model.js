const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isDeletable: {
    type: Boolean,
    default: true,
  },
});
module.exports = mongoose.model("Category", categorySchema);
