import express from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { USER_ROLE } from '../user/user.constants';
import { ProductController } from './products.controller';
import createProductValidation from './products.validation';
const router = express.Router();

router.post(
  '/create-product',
  auth(USER_ROLE.admin),
  validateRequest(createProductValidation),
  ProductController.createProduct,
);
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getSingleProduct);
router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  ProductController.updateSingleProduct,
);
router.delete(
  '/:id',
  auth(USER_ROLE.admin),
  ProductController.deleteSingleProduct,
);

export const ProductsRoute = router;
