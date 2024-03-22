import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { ProductController } from './products.controller';
import createProductValidation from './products.validation';
const router = express.Router();

router.post(
  '/create-product',
  validateRequest(createProductValidation),
  ProductController.createProduct,
);
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getSingleProduct);
router.patch('/:id', ProductController.updateSingleProduct);
router.delete('/:id', ProductController.deleteSingleProduct);

export const ProductsRoute = router;
