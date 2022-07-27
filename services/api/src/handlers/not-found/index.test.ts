import { Request, Response } from 'express';
import notFoundedHandler from '.';

describe('notFoundedHandler', () => {
  it('should call next function', () => {
    const next = jest.fn();
    notFoundedHandler({} as Request, {} as Response, next);
    expect(next).toHaveBeenCalled();
  });

  it('should call next function for graphql', () => {
    const next = jest.fn();
    notFoundedHandler({ path: '/graphql' } as Request, {} as Response, next);
    expect(next).toHaveBeenCalled();
  });
});
