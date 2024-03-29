import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { IAccountChange } from '../interface/IDeposit';
import HttpException from '../shared/HttpExceptionError';
import StatusCodes from '../utils/StatusCodes';


const loginSchema = Joi.object<IAccountChange>({
  codCliente: Joi.number().required(), 
  valor: Joi.number().min(0.1).required(),
});

const validateSchemaChange = (req: Request, __res: Response, next: NextFunction) => {
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

export default validateSchemaChange;