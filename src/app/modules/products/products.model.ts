import { Schema, model } from 'mongoose';
import { TProduct } from './products.interface';

const productSchema = new Schema<TProduct>(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Title is required'],
    },
    image: {
      type: String,
      required: [true, 'Product image is required'],
    },
    optImage1: {
      type: String,
    },
    optImage2: {
      type: String,
    },
    optImage3: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
    ratings: {
      type: Number,
      required: [true, 'Rating is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    flashSale: {
      type: Boolean,
      default: false,
    },
    offer: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

export const Product = model<TProduct>('products', productSchema);
