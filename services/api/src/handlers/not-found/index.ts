import { Request, Response, NextFunction } from 'express';
import httpErrors from 'http-errors';

export const notFoundHandler = (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  if (request.path === '/graphql') {
    return next();
  }
  next(httpErrors(404));
};

export default notFoundHandler;
