import path from 'path';
import fs from 'fs';
import express from 'express';
import multer from 'multer';
import Product from '../models/productModel.js';
const router = express.Router();

// Upload Image Controller
var storage = multer.diskStorage({
   destination: (req, file, cb) => {
       cb(null, 'uploads/')
   },
   filename: (req, file, cb) => {
       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
   }
});

function checkFileType(file, cb) {
   const filetypes = /jpg|jpeg|png/;
   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
   const mimetype = filetypes.test(file.mimetype);

   if(extname && mimetype) {
      return cb(null, true)
   } else {
      cb("Somente imagens.")
   }
}

const upload = multer({
   storage,
   fileFilter: function(req, file, cb) {
      checkFileType(file, cb)
   }
});


// Upload Route
router.post('/', upload.single('image'), (req, res) => {
   res.send(`/${req.file.path}`)
});

// Delete image route
router.post('/delete', async (req, res) => {
   const { imagePath, productId } = req.body;
   try {
      const product = await Product.findById(productId);
      if(product) {
         fs.unlinkSync(`./${imagePath}`)
         product.image = '';
         await product.save();
         res.send({message: "Imagem removida com sucesso."})
      } else {
         res.send({message: "Produto não encontrado."})
      }
    } catch(err) {
      console.error(err)
      res.send({error: err.message})
    }
});


export default router;