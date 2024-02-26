const Category = require("../models/category_Model");
const Note = require("../models/note_Model");
const fuzzy = require("fuzzy");

const isCategoryNameExist = async (name) => {
  try {
    // Convert the name to lowercase for case-insensitive comparison
    const lowercaseName = name.toLowerCase();

    // Get all categories
    const categories = await Category.find();

    // Use fuzzy matching to find similar category names
    const options = {
      extract: (el) => el.name.toLowerCase(),
    };

    const results = fuzzy.filter(lowercaseName, categories, options);
    const matches = results.map((result) => result.original);

    // Check if there's an exact match
    const exactMatch = matches.find(
      (category) => category.name.toLowerCase() === lowercaseName
    );

    return { exists: !!exactMatch, matches };
  } catch (error) {
    throw error;
  }
};

const updateNotesToDefaultCategory = async (deletedCategoryId) => {
  try {
    // Get the default category
    const defaultCategory = await Category.findOne({ isDeletable: false });

    // Update notes to use the default category
    await Note.updateMany(
      { category: deletedCategoryId },
      { $set: { category: defaultCategory._id } }
    );
  } catch (error) {
    throw error;
  }
};

const checkDeletable = async (req, res, next) => {
  try {
    // Get the default category
    const defaultCategory = await Category.findOne({ isDeletable: false });

    // Check if the category being deleted is the default category
    if (req.params.id.toString() === defaultCategory._id.toString()) {
      return res
        .status(400)
        .json({ message: "Cannot delete the default category!" });
    }

    // Continue with the deletion if not the default category
    next();
  } catch (error) {
    res.status(500).json({ message: "Error checking deletability!" });
  }
};

const get_AllCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    // Capitalize the names of all categories
    const capitalizedCategories = categories.map((category) => {
      const words = category.name.split(" ");
      const capitalizedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      const capitalizedName = capitalizedWords.join(" ");

      return {
        ...category._doc,
        name: capitalizedName,
      };
    });

    res.json(capitalizedCategories);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const create_Category = async (req, res) => {
  try {
    const newCategory = new Category({ name: req.body.name.toLowerCase() });
    stringConvert = JSON.stringify(newCategory);
    const result = await isCategoryNameExist(stringConvert);
    if (result.exists) {
      console.log(`Category name "${stringConvert}" already exists!`);
      console.log("Similar matches:", result.matches);
    } else {
      console.log(`Category name "${stringConvert}" is available.`);
      await newCategory.save();
    }

    res.json({ message: "Category created successfully!" });
  } catch (error) {
    if (error.name === "ValidationError" && error.code === 11000) {
      // Duplicate category name
      res.status(400).json({ message: "Category already exists!" });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

const update_Category = async (req, res) => {
  try {
    const categoryId = req.params.id;

    // Check if the category being updated is the default category
    const isDefaultCategory = await Category.exists({
      _id: categoryId,
      isDeletable: false,
    });

    if (isDefaultCategory) {
      return res
        .status(400)
        .json({ message: "Cannot modify the default category!" });
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      { name: req.body.name.toLowerCase() },
      { new: true } // Return updated document
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found!" });
    }

    // Add these lines to update associated notes:
    await Note.updateMany(
      { category: categoryId },
      { $set: { category: null } } // Set category to null for orphaned notes
    );
    await Note.updateMany(
      { previousCategory: categoryId },
      { $set: { category: updatedCategory._id, previousCategory: undefined } } // Update notes with new category ID and remove previousCategory field
    );

    res.json({ message: "Category updated successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error updating category!" });
  }
};

const delete_Category = async (req, res) => {
  try {
    // Use the checkDeletable middleware before deleting
    const deletedCategoryId = req.params.id;

    await updateNotesToDefaultCategory(deletedCategoryId);

    await checkDeletable(req, res, async () => {
      await Category.findByIdAndDelete(deletedCategoryId);
      res.json({ message: "Category deleted successfully!" });
    });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category!" });
  }
};

module.exports = {
  create_Category,
  get_AllCategories,
  delete_Category,
  update_Category,
};
