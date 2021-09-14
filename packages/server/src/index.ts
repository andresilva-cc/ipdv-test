import App, { Dialect } from './App';
import {
  APP_PORT
} from './config/app';
import {
  DB_DIALECT, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD,
} from './config/database';
import middlewares from './middlewares/Setup';

new App(
  // Options
  {
    port: APP_PORT,
    database: {
      dialect: DB_DIALECT as Dialect,
      host: DB_HOST,
      port: DB_PORT,
      database: DB_DATABASE,
      username: DB_USERNAME,
      password: DB_PASSWORD,
    },
  },

  // Middlewares
  middlewares,
).start();
