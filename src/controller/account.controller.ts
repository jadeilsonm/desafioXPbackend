import { Request, Response, Router } from 'express';
import validateSchemaChange from '../middleware/validateChangeAccount';
import validateToken from '../middleware/validateToken';
import userServices from '../services/user.services';

import StatusCodes from '../utils/StatusCodes';

const accountRouter = Router();

/**
 * @swagger
 *  tags:
 *    name: Conta
 *    description: EndPoint dados da conta
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      Saldo:
 *        type: object
 *        required: 
 *          - codCliente     
 *          - saldo
 *        properties: 
 *          codCliente:
 *            type: number
 *          saldo:
 *            type: number
 *        example:
 *            saldo: 10.60
 *            codCliente: 1
 */

accountRouter.use(validateToken);

/**
 * @swagger
 *  /conta/{codCliente}:
 *    get:
 *      tags: [Conta]
 *      description: Este Endpoint retorna a conta do clinte com seu codigo e seu saldo.
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
 *                type: object
 *                $ref: '#/components/schemas/Saldo' 
 */
accountRouter.get(
  '/:id', 
  async (req: Request, res: Response): Promise<Response> => {
    const codCliente = +(req.params.id);
    const payload = await userServices.getUser(codCliente, res.locals.payload);
    return res.status(StatusCodes.OK).json(payload);
  },
);

accountRouter.use(validateSchemaChange);



/**
 * @swagger
 *  /conta/depositar:
 *    post:
 *      tags: [Conta]
 *      description: Este Endpoint é responsavel por fazer um novo deposito
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Saldo'
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/Saldo' 
 */
accountRouter.post(
  '/depositar', 
  async (req: Request, res: Response): Promise<Response> => {
    const payload = await userServices.changeValue(req.body, res.locals.payload);
    return res.status(StatusCodes.OK).json(payload);
  },
);

/**
 * @swagger
 *  /conta/sacar:
 *    post:
 *      tags: [Conta]
 *      description: Este Endpoint é responsavel por fazer um saque
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Saldo'
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/Saldo' 
 */
accountRouter.post(
  '/sacar', 
  async (req: Request, res: Response): Promise<Response> => {
    const payload = await userServices.changeValue(req.body, res.locals.payload, '-');
    return res.status(StatusCodes.OK).json(payload);
  },
);

export default accountRouter;