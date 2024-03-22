import { TProduct } from './products.interface';
import { Product } from './products.model';

const createProductIntoDb = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductsFromDb = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductFromDb = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateSingleProductIntoDb = async (id: string, payload: TProduct) => {
  const result = await Product.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteSingleProductFromDb = async (id: string) => {
  const result = await Product.findByIdAndDelete({ _id: id }, { new: true });
  return result;
};

export const ProductServices = {
  createProductIntoDb,
  getAllProductsFromDb,
  getSingleProductFromDb,
  updateSingleProductIntoDb,
  deleteSingleProductFromDb,
};
