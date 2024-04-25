import express from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { USER_ROLE } from '../user/user.constants';
import { ProductController } from './products.controller';
import createProductValidation from './products.validation';
const router = express.Router();

router.post(
  '/create-product',
  validateRequest(createProductValidation),
  ProductController.createProduct,
);
router.get('/', auth(USER_ROLE.admin), ProductController.getAllProducts);
router.get('/:id', ProductController.getSingleProduct);
router.patch('/:id', ProductController.updateSingleProduct);
router.delete('/:id', ProductController.deleteSingleProduct);

export const ProductsRoute = router;
