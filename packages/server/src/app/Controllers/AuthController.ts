import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from '../Errors';
import { AuthService } from '../Services';
import container from '../../container';

class AuthController {
  private static authService = <AuthService>container.get('AuthService');

  public static async login(request: Request, response: Response, next: NextFunction) {
    try {
      if (!request.body.email || !request.body.password) {
        throw new BadRequestError();
      }

      const authData = await AuthController.authService.login(
        request.body.email,
        request.body.password,
      );

      return response.status(200).send(authData);
    } catch (error) {
      return next(error);
    }
  }

  public static async refreshToken(request: Request, response: Response, next: NextFunction) {
    try {
      const authData = await AuthController.authService.refreshToken(
        request.body.refresh_token,
      );

      return response.status(200).send(authData);
    } catch (error) {
      return next(error);
    }
  }

  public static getUser(request: Request, response: Response, next: NextFunction) {
    try {
      // @ts-ignore
      return response.status(200).send(request.user);
    } catch (ex) {
      return next(ex);
    }
  }
}

export default AuthController;
