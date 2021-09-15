import { Express } from 'express';
import costCenter from './costCenter';
import department from './department';

const routes = [
  costCenter,
  department,
];

function registerRoutes(application: Express) {
  routes.forEach((route) => route(application));
}

export default registerRoutes;
