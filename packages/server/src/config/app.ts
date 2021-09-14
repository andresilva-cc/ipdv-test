import env from '../app/Utils/env';

export const APP_NAME = env('APP_NAME', 'My App');

export const APP_URL = env('APP_URL', 'http://api.myapp.com');

export const APP_PORT = parseInt(env('APP_PORT', '80'), 10);

export const APP_ENV = env('APP_ENV', 'development');
