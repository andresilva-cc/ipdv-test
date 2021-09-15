import { Express } from 'express';
import costCenter from './costCenter';

const routes = [
  costCenter,
];

function registerRoutes(application: Express) {
  routes.forEach((route) => route(application));
}

export default registerRoutes;
