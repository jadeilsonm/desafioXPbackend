import jwt from 'jsonwebtoken';
import Messages from '../utils/Messages';
import StatusCodes from '../utils/StatusCodes';
import HttpException from './HttpExceptionError';

const SECRET = process.env.JWT_SECRET || 'senhaSecreta';

const jwtConfig: jwt.SignOptions = {
  algorithm: 'HS256',
};

export const generateJWTToken = (payload: string) => 
  jwt.sign(payload, SECRET, jwtConfig);

export const authenticateToken = async (token?: string) => {
  const status = StatusCodes.UNAUTHORIZED;
  if (!token) {
    throw new HttpException(status, Messages.TOKEN_NOT_FOUND);
  }
  try {
    const introspection = await jwt.verify(token, SECRET, jwtConfig);
    return introspection;
  } catch (e) {
    throw new HttpException(status, Messages.TOKEN_INVALID);
  }
};