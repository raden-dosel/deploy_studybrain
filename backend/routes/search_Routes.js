const express = require("express");

const { search_Notes } = require("../controllers/search_NoteController");

const router = express.Router();

//Search for notes
router.get("/", search_Notes);

module.exports = router;
