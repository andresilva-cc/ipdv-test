import { NextFunction, Request, Response } from 'express';
import { CostCenterService } from '../Services';
import container from '../../container';

class CostCenterController {
  private static costCenterService = <CostCenterService>container.get('CostCenterService');

  public static async all(_request: Request, response: Response, next: NextFunction) {
    try {
      const costCenters = await CostCenterController.costCenterService.all();
      return response.status(200).send(costCenters);
    } catch (error) {
      return next(error);
    }
  }

  public static async create(request: Request, response: Response, next: NextFunction) {
    try {
      const costCenter = await CostCenterController.costCenterService.create(request.body.name);
      return response.status(201).send(costCenter);
    } catch (error) {
      return next(error);
    }
  }

  public static async update(request: Request, response: Response, next: NextFunction) {
    try {
      const costCenter = await CostCenterController.costCenterService.update(
        parseInt(request.params.id, 10),
        {
          name: request.body.name,
        },
      );
      return response.status(200).send(costCenter);
    } catch (error) {
      return next(error);
    }
  }
}

export default CostCenterController;
