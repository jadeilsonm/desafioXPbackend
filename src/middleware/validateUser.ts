import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import IUser from '../interface/IUser';
import HttpException from '../shared/HttpExceptionError';
import StatusCodes from '../utils/StatusCodes';


const loginSchema = Joi.object<IUser>({
  nome: Joi.string().required(),
  email: Joi.string().email().required(), 
  password: Joi.string().required(),
});

const validateSchemaUser = (req: Request, __res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(
    req.body,
    { abortEarly: false },
  );
  if (!error) {
    return next();
  }
  const [message] = error.details.map((e) => e.message);
  let status = StatusCodes.UNPROCESSABLE_ENTITY;
  if (message.includes('is required')) status = StatusCodes.BAD_REQUEST;
  throw new HttpException(status, message);
};

export default validateSchemaUser;