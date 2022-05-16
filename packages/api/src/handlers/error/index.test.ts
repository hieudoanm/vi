import { Request, Response } from 'express';
import { HttpError } from 'http-errors';
import errorHandler from '.';

const mockResponse = () => {
  const res: any = {};
  // replace the following () => res
  // with your function stub/mock of choice
  // making sure they still return `res`
  res.status = jest.fn(() => res);
  res.json = jest.fn(() => res);
  return res;
};

describe('errorHandler', () => {
  it('should call next function', () => {
    const next = jest.fn();
    errorHandler(null, {} as Request, {} as Response, next);
    expect(next).toHaveBeenCalled();
  });

  it('should call next function', () => {
    const next = jest.fn();
    const response = mockResponse();
    const error = { status: 400, message: 'message' };
    errorHandler(error as HttpError, {} as Request, response as Response, next);
    expect(response.status).toBeCalledWith(400);
    expect(response.json).toBeCalledWith({ message: 'message', error });
  });
});
