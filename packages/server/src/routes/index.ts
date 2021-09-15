import { Express } from 'express';
import costCenter from './costCenter';
import department from './department';
import position from './position';

const routes = [
  costCenter,
  department,
  position,
];

function registerRoutes(application: Express) {
  routes.forEach((route) => route(application));
}

export default registerRoutes;
