import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from '../Errors';
import { UserService } from '../Services';
import container from '../../container';

class UserController {
  private static userService = <UserService>container.get('UserService');

  public static async all(_request: Request, response: Response, next: NextFunction) {
    try {
      const users = await UserController.userService.all();
      return response.status(200).send(users);
    } catch (error) {
      return next(error);
    }
  }

  public static async create(request: Request, response: Response, next: NextFunction) {
    try {
      if (!request.body.password) {
        throw new BadRequestError();
      }

      const user = await UserController.userService.create(
        request.body.name,
        request.body.email,
        request.body.password,
        parseInt(request.body.positionId, 10) || 0,
        parseInt(request.body.departmentId, 10) || 0,
      );

      return response.status(201).send(user);
    } catch (error) {
      return next(error);
    }
  }

  public static async update(request: Request, response: Response, next: NextFunction) {
    try {
      const user = await UserController.userService.update(
        parseInt(request.params.id, 10),
        {
          name: request.body.name,
          email: request.body.email,
          password: request.body.password,
          positionId: parseInt(request.body.positionId, 10) || 0,
          departmentId: parseInt(request.body.departmentId, 10) || 0,
        },
      );
      return response.status(200).send(user);
    } catch (error) {
      return next(error);
    }
  }

  public static async delete(request: Request, response: Response, next: NextFunction) {
    try {
      await UserController.userService.delete(
        parseInt(request.params.id, 10),
      );
      return response.sendStatus(200);
    } catch (error) {
      return next(error);
    }
  }
}

export default UserController;
