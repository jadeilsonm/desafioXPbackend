
import { Request, Response, Router } from 'express';
import validateToken from '../middleware/validateToken';
import activeServices from '../services/active.services';
import HttpException from '../shared/HttpExceptionError';
import Messages from '../utils/Messages';

import StatusCodes from '../utils/StatusCodes';

const activeRouter = Router();

/**
 * @swagger
 *  tags:
 *    name: Ativos
 *    description: EndPoint ativos
 */

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
  async (_req: Request, res: Response): Promise<Response> => {
    const payload = await activeServices.getAllActive();
    return res.status(StatusCodes.OK).json(payload);
  },
);

activeRouter.use(validateToken);

activeRouter.post(
  '/', 
  async (req: Request, res: Response): Promise<Response> => {
    const payload = await activeServices.createdActive(req.body);
    if (!payload) {
      throw new HttpException(StatusCodes.SERVER_ERROR, Messages.SERVER_ERROR);
    }
    return res.status(StatusCodes.OK).send();
  },
);

export default activeRouter;