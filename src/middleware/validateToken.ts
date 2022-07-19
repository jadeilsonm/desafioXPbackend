
import { NextFunction, Request, Response } from 'express';
import { authenticateToken } from '../shared/JWT';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  try {
    const payload = await authenticateToken(token);
    res.locals.payload = payload;
  } catch (error) {
    console.log(error);
    throw error;
  }
  next();
};

export default validateToken;