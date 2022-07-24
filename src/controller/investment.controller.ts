import { Request, Response, Router } from 'express';
import validateToken from '../middleware/validateToken';
import activeServices from '../services/active.services';
import investimentServices from '../services/investiment.services';

import StatusCodes from '../utils/StatusCodes';

const investmentRouter = Router();

/**
 * @swagger
 *  tags:
 *    name: Investiment
 *    description: EndPoint investmentos
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      Investiment:
 *        type: object
 *        required: 
 *          - codCliente 
 *          - codAtivo
 *          - qtdeAtivo
 *        properties: 
 *          codCliente:
 *            type: number
 *          codAtivo:
 *            type: number
 *          qtdeAtivo:
 *            type: number
 *        example:
 *            codAtivo: 1
 *            codCliente: 1
 *            qtdeAtivo: 1
 */

/**
 * @swagger
 *  /investimentos/ativos/{codAtivo}:
 *    get:
 *      tags: [Ativos]
 *      description: Este Endpoint retorna o ativo com o codAtivo passado como parametro
 *      parameters:
 *        - in: path
 *          name: codAtivo
 *          type: string
 *          required: true
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/Active' 
 */

investmentRouter.get(
  '/ativos/:codAtivo', 
  async (req: Request, res: Response): Promise<Response> => {
    const { codAtivo } = req.params;
    const payload = await activeServices.FindByActive(+(codAtivo));
    return res.status(StatusCodes.OK).json(payload);
  },
);

investmentRouter.use(validateToken);

/**
 * @swagger
 *  /investimentos/comprar:
 *    post:
 *      tags: [Investiment]
 *      description: Este Endpoint é responsavel pelo compra de ativos 
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Investiment'
 *      responses:
 *        200:
 *          content:
 */

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

/**
 * @swagger
 *  /investimentos/vender:
 *    post:
 *      tags: [Investiment]
 *      description: Este Endpoint é responsavel pelo venda de ativos 
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Investiment'
 *      responses:
 *        200:
 *          content:
 */

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