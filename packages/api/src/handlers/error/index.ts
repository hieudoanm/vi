import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';

export const errorHandler = (
  error: HttpError | null,
  _request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error) {
    const message = error.message || 'Error Message';
    response.status(error.status || 500).json({ message, error });
    return;
  }

  next();
};

export default errorHandler;
