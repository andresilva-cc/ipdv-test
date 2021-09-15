import { Express } from 'express';
import costCenter from './costCenter';
import department from './department';
import position from './position';
import user from './user';

const routes = [
  costCenter,
  department,
  position,
  user,
];

function registerRoutes(application: Express) {
  routes.forEach((route) => route(application));
}

export default registerRoutes;
