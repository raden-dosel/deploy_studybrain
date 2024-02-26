const express = require("express");

const {
  create_Category,
  get_AllCategories,
  delete_Category,
  update_Category,
} = require("../controllers/category_Controller");

const router = express.Router();

//Get all Categories
router.get("/", get_AllCategories);

//Post a new Category
router.post("/", create_Category);

//Update a Category
router.patch("/:id", update_Category);

//Delete a Category
router.delete("/:id", delete_Category);

module.exports = router;
