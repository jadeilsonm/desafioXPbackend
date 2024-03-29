import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/HttpExceptionError';

const httpErrorMiddleware = (err: Error, __req: Request, res: Response, next: NextFunction) => {
  if (!err) {
    next();
  }
  const { status, message } = err as HttpException;
  res.status(status || 500).json({ message });
};

export default httpErrorMiddleware;