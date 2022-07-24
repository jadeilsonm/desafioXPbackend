
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

/**
 * @swagger
 *  components:
 *    schemas:
 *      NovoActive:
 *        type: object
 *        required: 
 *          - codCliente
 *          - qtdeAtivo     
 *          - valor
 *        properties: 
 *          codActivo:
 *            type: number
 *          codCliente:
 *            type: number
 *          valor:
 *            type: number
 *          name:
 *            type: string
 *          qtdeAtivo:
 *            type: number
 *        example:
 *            valor: 10.60
 *            codCliente: 1
 *            qtdeAtivo: 1
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      Active:
 *        type: object
 *        required: 
 *          - qtdeAtivo     
 *          - valor
 *        properties: 
 *          codActivo:
 *            type: number
 *          codCliente:
 *            type: number
 *          valor:
 *            type: number
 *          name:
 *            type: string
 *          qtdeAtivo:
 *            type: number
 *        example:
 *            valor: 10.60
 *            codCliente: 1
 *            qtdeAtivo: 1
 */

/**
 * @swagger
 *  /ativos/{codCliente}:
 *    get:
 *      tags: [Ativos]
 *      description: Este Endpoint retorna uma lista de ativos que o usario tem
 *      parameters:
 *        - in: path
 *          name: codCliente
 *          type: string
 *          required: true
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Active' 
 */
activeRouter.get(
  '/:id', 
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const payload = await activeServices.getActive(+(id));
    return res.status(StatusCodes.OK).json(payload);
  },
);

/**
 * @swagger
 *  /ativos:
 *    get:
 *      tags: [Ativos]
 *      description: Este Endpoint retorna uma lista de todos os ativos no mercado
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Active' 
 */
activeRouter.get(
  '/', 
  async (_req: Request, res: Response): Promise<Response> => {
    const payload = await activeServices.getAllActive();
    return res.status(StatusCodes.OK).json(payload);
  },
);

activeRouter.use(validateToken);


/**
 * @swagger
 *  /ativos:
 *    post:
 *      tags: [Ativos]
 *      description: Este Endpoint é responsavel por criar um novo ativo
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