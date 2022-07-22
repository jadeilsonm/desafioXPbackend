
import { Request, Response, Router } from 'express';
import activeServices from '../services/active.services';

import StatusCodes from '../utils/StatusCodes';

const activeRouter = Router();

activeRouter.get(
  '/:id', 
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const payload = await activeServices.getActive(+(id));
    return res.status(StatusCodes.OK).json(payload);
  },
);

activeRouter.get(
  '/', 
  async (req: Request, res: Response): Promise<Response> => {
    const payload = await activeServices.getAllActive();
    return res.status(StatusCodes.OK).json(payload);
  },
);

activeRouter.post(
  '/', 
  async (req: Request, res: Response): Promise<Response> => {
    const payload = await activeServices.createdActive(req.body);
    return res.status(StatusCodes.OK).json(payload);
  },
);

export default activeRouter;