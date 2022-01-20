import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

// @desc    Get all products 
// @route   GET /api/product
// @access  Public
const getAllProducts = asyncHandler(async (req, res) => {
   const products = await Product.find({}).populate('category', 'name');;
   res.json(products);
});

// @desc    Get product by id 
// @route   GET /api/product/:id
// @access  Public
const getProduct = asyncHandler(async (req, res) => {
   const product = await Product
      .findById(req.params.id)
      .populate('category', 'name');
   if(product) {
      res.json(product);
   } else {
      res.status(404);
      throw new Error("Produto não encontrado.")
   }
});

// @desc    Create new product 
// @route   POST /api/product
// @access  Public
const createProduct  = asyncHandler(async (req, res) => {

   const { 
      name, 
      description, 
      countInStock,
      price,
      image,
      status,
      category
   } = req.body;

   const newProduct = await Product.create({
      name, 
      description, 
      countInStock,
      price,
      image,
      status,
      category
   });
   
   if(newProduct) {
      res.status(201).json({ newProduct });
   } else {
      res.status(400);
      throw new Error("Dados Inválidos.");
   }
})

// @desc    Update product 
// @route   PATCH /api/product/:id
// @access  Public
const updateProduct = asyncHandler(async (req, res) => {
   const product = await Product.findById(req.params.id);
   if(product) {
      const {
         name, 
         description, 
         countInStock,
         price,
         status,
         category
      } = req.body;

      product.name = name || product.name;
      product.description = description || product.description;
      product.countInStock = countInStock || product.countInStock;
      product.price = price || product.price;
      product.category = category || product.category;
      product.status = status || product.status;

      const updatedProduct = await product.save();
      res.json(updatedProduct);

   } else {
      res.status(404);
      throw new Error("Produto não encontrado.");
   }
});

// @desc    Delete product 
// @route   DELETE /api/product/:id
// @access  Public
const deleteProduct = asyncHandler(async (req, res) => {

   const product = await Product.findById(req.params.id);

   if(product) {
      await product.remove();
      res.json({message: "Produto removido com sucesso."});

   } else {
      res.status(404);
      throw new Error("Produto não encontrado.");
   }
});



export { 
   getAllProducts, 
   getProduct, 
   createProduct, 
   updateProduct, 
   deleteProduct
};