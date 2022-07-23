import { Request, Response, Router } from 'express';
import validateToken from '../middleware/validateToken';
import activeServices from '../services/active.services';
import investimentServices from '../services/investiment.services';

import StatusCodes from '../utils/StatusCodes';

const investmentRouter = Router();

/**
 * @swagger
 *  tags:
 *    name: Investimentos
 *    description: EndPoint investmentos
 */

investmentRouter.get(
  '/ativos/:id', 
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const payload = await activeServices.FindByActive(+(id));
    return res.status(StatusCodes.OK).json(payload);
  },
);

investmentRouter.use(validateToken);

investmentRouter.post(
  '/comprar', 
  async (req: Request, res: Response): Promise<Response> => {
    const payload = await investimentServices.comprar(req.body);
    if (!payload) {
      console.log('');
    }
    return res.status(StatusCodes.OK).send();
  },
);

investmentRouter.post(
  '/vender', 
  async (req: Request, res: Response): Promise<Response> => {
    const payload = await investimentServices.vender(req.body);
    if (!payload) {
      console.log('');
    }
    return res.status(StatusCodes.OK).send();
  },
);


export default investmentRouter;