import { Request, Response, Router } from 'express';
import loginUser from '../services/login.services';

import StatusCodes from '../utils/StatusCodes';

const loginRouter = Router();

/**
 * @swagger
 *  tags:
 *    name: Login
 *    description: EndPoint Login
 */

loginRouter.post(
  '/', 
  async (req: Request, res: Response): Promise<Response> => {
    const token = await loginUser(req.body);
    return res.status(StatusCodes.OK).json(token);
  },
);

export default loginRouter;