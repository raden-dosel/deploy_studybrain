const mongoose = require("mongoose");
const Category = require("../models/category_Model");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI);

  // Check if default category exists
  const existingDefaultCategory = await Category.findOne({
    isDeletable: false,
  });

  // If not, create default category
  if (!existingDefaultCategory) {
    // Create default category
    const defaultCategory = new Category({
      name: "Default Category",
      isDeletable: false,
    });
    await defaultCategory.save();
    console.log("Default category created successfully.");
  } else {
    console.log("Default category already exists.");
  }

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
