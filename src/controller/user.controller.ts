import { Request, Response, Router } from 'express';
import validateSchemaUser from '../middleware/validateUser';
import userServices from '../services/user.services';

import StatusCodes from '../utils/StatusCodes';

const userRouter = Router();

userRouter.post(
  '/',
  validateSchemaUser,
  async (req: Request, res: Response): Promise<Response> => {
    const newUser = await userServices.createdUser(req.body); 
    return res.status(StatusCodes.OK).json(newUser);
  },
);

userRouter.get('/',  async (req: Request, res: Response): Promise<Response> => {
  const newUser = await userServices.getAllUser(); 
  return res.status(StatusCodes.OK).json(newUser);
},
);


export default userRouter;