import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/HttpExceptionError';

const httpErrorMiddleware = (err: Error, __req: Request, res: Response, __next: NextFunction) => {
  const { status, message } = err as HttpException;
  res.status(status || 500).json({ message });
};

export default httpErrorMiddleware;