import { NextFunction, Request, Response } from 'express';
import { TokenFacade } from '../../app/Facades';
import { UnauthorizedError } from '../../app/Errors';
import ErrorParser from '../../app/Errors/ErrorParser';

function extractToken(authorizationHeader: string): string {
  return authorizationHeader.substring(7, authorizationHeader.length);
}

function setUserInRequest(request: Request, user: any): void {
  // @ts-ignore
  request.user = user;
}

export default (request: Request, response: Response, next: NextFunction) => {
  try {
    const authorizationHeader = request.headers.authorization;

    if (authorizationHeader?.startsWith('Bearer ')) {
      const token = extractToken(authorizationHeader);

      const user = TokenFacade.verify(token);
      setUserInRequest(request, user);

      return next();
    }

    throw new UnauthorizedError();
  } catch (error) {
    const parsedError = ErrorParser.parse(error);
    return response.status(parsedError.code).send(parsedError.toPlainObject());
  }
};
