import { Router } from 'express';
import { AuthRoute } from '../modules/auth/auth.route';
import { ProductsRoute } from '../modules/products/products.route';
import { UserRoute } from '../modules/user/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/products',
    route: ProductsRoute,
  },
  {
    path: '/user',
    route: UserRoute,
  },
  {
    path: '/auth',
    route: AuthRoute,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
