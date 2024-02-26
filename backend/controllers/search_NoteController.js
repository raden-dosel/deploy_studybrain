const Note = require("../models/note_Model.js"); // Assuming you have the Note model

const search_Notes = async (req, res) => {
  try {
    const keyword = req.query.q;
    const searchRegex = new RegExp(keyword, "i"); // Case-insensitive search
    const searchQuery = {
      $or: [
        { title: searchRegex },
        { content: searchRegex },
        { "category.name": searchRegex },
      ],
    };
    const foundNotes = await Note.find(searchQuery).populate("category"); // Include category details
    res.json(foundNotes);
  } catch (error) {
    res.status(500).json({ message: "Error searching notes!" });
  }
};

module.exports = {
  search_Notes,
};
