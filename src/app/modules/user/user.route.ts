import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { UserController } from './user.controller';
import createUserValidation from './user.validation';
const router = express.Router();

router.post(
  '/create-user',
  validateRequest(createUserValidation),
  UserController.createUser,
);
router.get('/', UserController.getAllUser);
router.get('/:id');
router.patch('/:id');
router.delete('/:id');

export const UserRoute = router;
