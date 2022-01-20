import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   countInStock: {
      type: Number,
      required: true,
      default: 0
   },
   price: {
      type: Number,
      required: true
   },
   status: {
      type: Boolean,
      required: true
   },
   image: {
      type: String,
   },
   date: {
      type: Date,
      default: Date.now
   },
   category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true
   },
},
   {
      timestamps: true
   }
);

const Product = mongoose.model('Product', ProductSchema);
export default Product;