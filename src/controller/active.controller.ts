
import { Request, Response, Router } from 'express';
import activeServices from '../services/active.services';

import StatusCodes from '../utils/StatusCodes';

const activeRouter = Router();

activeRouter.post(
  '/', 
  async (req: Request, res: Response): Promise<Response> => {
    const payload = await activeServices.createdActive(req.body);
    return res.status(StatusCodes.OK).json(payload);
  },
);

export default activeRouter;