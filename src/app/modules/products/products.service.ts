import { TProduct } from './products.interface';
import { Product } from './products.model';

const createProductIntoDb = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductsFromDb = async (query: Record<string, unknown>) => {
  console.log(query);
  const queryObj = { ...query };

  const productSearchAbleFields = ['title', 'category'];

  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }
  const searchQuery = Product.find({
    $or: productSearchAbleFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  //filtering
  const excludeFields = ['searchTerm', 'sort'];

  excludeFields.forEach((el) => delete queryObj[el]);
  const result = await searchQuery.find(queryObj);

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
