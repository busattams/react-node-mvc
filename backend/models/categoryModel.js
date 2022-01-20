import mongoose from 'mongoose';
import Product from './productModel.js';

const CategorySchema = mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   status: {
      type: Boolean,
      default: true
   },
   date: {
      type: Date,
      default: Date.now
   },
}, 
   {
      timestamps: true
   }
);


CategorySchema.pre('remove', async function(next) {
   await Product.deleteMany({category: this._id});
   next();
});

const Category = mongoose.model('Category', CategorySchema);
export default Category;