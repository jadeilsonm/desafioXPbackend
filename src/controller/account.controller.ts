import { Request, Response, Router } from 'express';
import validateSchemaChange from '../middleware/validateChangeAccount';
import validateToken from '../middleware/validateToken';
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

accountRouter.use(validateToken);

accountRouter.post(
  '/depositar', 
  async (req: Request, res: Response): Promise<Response> => {
    const payload = await userServices.changeValue(req.body, res.locals.payload);
    return res.status(StatusCodes.OK).json(payload);
  },
);

accountRouter.post(
  '/sacar', 
  async (req: Request, res: Response): Promise<Response> => {
    const payload = await userServices.changeValue(req.body, res.locals.payload, '-');
    return res.status(StatusCodes.OK).json(payload);
  },
);

export default accountRouter;