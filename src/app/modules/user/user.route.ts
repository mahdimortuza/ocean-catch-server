import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { UserController } from './user.controller';
import createUserValidation from './user.validation';
const router = express.Router();

router.post(
  '/auth/register',
  validateRequest(createUserValidation),
  UserController.createUser,
);
router.get('/auth/register', UserController.getAllUser);

export const UserRoute = router;
