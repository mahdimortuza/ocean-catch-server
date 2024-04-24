import express from 'express';
import { AuthControllers } from './auth.controller';

const router = express.Router();

router.post('/login', AuthControllers.loginUser);

// router.post('/change-password', AuthControllers.changePassword);

export const AuthRoute = router;
