import { NextFunction, Request, Response } from 'express';
import { DepartmentService } from '../Services';
import container from '../../container';

class DepartmentController {
  private static departmentService = <DepartmentService>container.get('DepartmentService');

  public static async all(_request: Request, response: Response, next: NextFunction) {
    try {
      const departments = await DepartmentController.departmentService.all();
      return response.status(200).send(departments);
    } catch (error) {
      return next(error);
    }
  }

  public static async create(request: Request, response: Response, next: NextFunction) {
    try {
      const costCenter = await DepartmentController.departmentService.create(
        request.body.name,
        parseInt(request.body.costCenterId, 10) || 0,
      );
      return response.status(201).send(costCenter);
    } catch (error) {
      return next(error);
    }
  }

  public static async update(request: Request, response: Response, next: NextFunction) {
    try {
      const costCenter = await DepartmentController.departmentService.update(
        parseInt(request.params.id, 10),
        {
          name: request.body.name,
          costCenterId: parseInt(request.body.costCenterId, 10),
        },
      );
      return response.status(200).send(costCenter);
    } catch (error) {
      return next(error);
    }
  }

  public static async delete(request: Request, response: Response, next: NextFunction) {
    try {
      await DepartmentController.departmentService.delete(
        parseInt(request.params.id, 10),
      );
      return response.sendStatus(200);
    } catch (error) {
      return next(error);
    }
  }
}

export default DepartmentController;
