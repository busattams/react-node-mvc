import Category from '../models/categoryModel.js';
import asyncHandler from 'express-async-handler';

// @desc    Get all categories 
// @route   GET /api/category
// @access  Public
const getAllCategories = asyncHandler(async (req, res) => {
   const categories = await Category.find({});
   res.json(categories);
});

// @desc    Get category by id 
// @route   GET /api/category/:id
// @access  Public
const getCategory = asyncHandler(async (req, res) => {
   const category = await Category.findById(req.params.id);
   if(category) {
      res.json(category);
   } else {
      res.status(404);
      throw new Error("Categoria não encontrada.")
   }
});

// @desc    Create new category 
// @route   POST /api/category
// @access  Public
const createCategory  = asyncHandler(async (req, res) => {

   const { name, description, status } = req.body;
   const newCategory = await Category.create({
      name,
      description,
      status
   });
   
   if(newCategory) {
      res.status(201).json({
         newCategory
      });
   } else {
      res.status(400);
      throw new Error("Dados Inválidos.");
   }
})

// @desc    Update category 
// @route   PATCH /api/category/:id
// @access  Public
const updateCategory = asyncHandler(async (req, res) => {
   
   const category = await Category.findById(req.params.id);

   if(category) {
      const {
         name,
         description,
         status
      } = req.body;

      category.name = name;
      category.description = description;
      category.status = status;

      const updatedCategory = await category.save();
      res.json(updatedCategory);

   } else {
      res.status(404);
      throw new Error("Categoria não encontrada.");
   }
});

// @desc    Delete category 
// @route   DELETE /api/category/:id
// @access  Public
const deleteCategory = asyncHandler(async (req, res) => {

   const category = await Category.findById(req.params.id);

   if(category) {
      await category.remove();
      res.json({message: "Categoria removida com sucesso."});

   } else {
      res.status(404);
      throw new Error("Categoria não encontrada.");
   }
});



export { 
   getAllCategories, 
   getCategory, 
   createCategory, 
   updateCategory, 
   deleteCategory 
};