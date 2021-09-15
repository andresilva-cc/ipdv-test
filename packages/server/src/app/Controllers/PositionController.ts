import { NextFunction, Request, Response } from 'express';
import { PositionService } from '../Services';
import container from '../../container';

class PositionController {
  private static positionService = <PositionService>container.get('PositionService');

  public static async all(_request: Request, response: Response, next: NextFunction) {
    try {
      const positions = await PositionController.positionService.all();
      return response.status(200).send(positions);
    } catch (error) {
      return next(error);
    }
  }

  public static async create(request: Request, response: Response, next: NextFunction) {
    try {
      const position = await PositionController.positionService.create(request.body.name);
      return response.status(201).send(position);
    } catch (error) {
      return next(error);
    }
  }

  public static async update(request: Request, response: Response, next: NextFunction) {
    try {
      const position = await PositionController.positionService.update(
        parseInt(request.params.id, 10),
        {
          name: request.body.name,
        },
      );
      return response.status(200).send(position);
    } catch (error) {
      return next(error);
    }
  }

  public static async delete(request: Request, response: Response, next: NextFunction) {
    try {
      await PositionController.positionService.delete(
        parseInt(request.params.id, 10),
      );
      return response.sendStatus(200);
    } catch (error) {
      return next(error);
    }
  }
}

export default PositionController;
