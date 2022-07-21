import { Request, Response, Router } from 'express';
import validateSchemaChange from '../middleware/validateChangeAccount';
import userServices from '../services/user.services';

import StatusCodes from '../utils/StatusCodes';

const accountRouter = Router();

accountRouter.get(
  '/:id', 
  async (req: Request, res: Response): Promise<Response> => {
    const codCliente = +(req.params.id);
    const payload = await userServices.getUser(codCliente);
    return res.status(StatusCodes.OK).json(payload);
  },
);

accountRouter.use(validateSchemaChange);

accountRouter.post(
  '/depositar', 
  async (req: Request, res: Response): Promise<Response> => {
    const payload = await userServices.changeValue(req.body);
    return res.status(StatusCodes.OK).json(payload);
  },
);

accountRouter.post(
  '/sacar', 
  async (req: Request, res: Response): Promise<Response> => {
    const payload = await userServices.changeValue(req.body, '-');
    return res.status(StatusCodes.OK).json(payload);
  },
);

export default accountRouter;