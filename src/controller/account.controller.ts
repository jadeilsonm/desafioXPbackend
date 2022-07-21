import { Request, Response, Router } from 'express';
import userServices from '../services/user.services';

import StatusCodes from '../utils/StatusCodes';

const accountRouter = Router();

accountRouter.post(
  '/depositar', 
  async (req: Request, res: Response): Promise<Response> => {
    const payload = await userServices.changeValue(req.body);
    return res.status(StatusCodes.OK).json(payload);
  },
);

export default accountRouter;