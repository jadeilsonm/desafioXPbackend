import { Request, Response, Router } from 'express';
import validateSchemaUser from '../middleware/validateUser';
import userServices from '../services/user.services';

import StatusCodes from '../utils/StatusCodes';

const userRouter = Router();


/**
 * @swagger
 *  tags:
 *    name: User
 *    description: EndPoint usuarios
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required: 
 *          - nome 
 *          - email
 *          - password
 *        properties: 
 *          id:
 *            type: number
 *          nome:
 *            type: string
 *          password:
 *            type: string
 *          valor:
 *            type: number
 *          email:
 *            type: string
 *        example:
 *            nome: teste
 *            email: teste@gmail.com
 *            password: teste123
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      Token:
 *        type: object
 *        required: 
 *          - token
 *        properties: 
 *          token:
 *            type: string
 *        example:
 *          token: ebJhbGciOnJIUzI1NiJ9.eyJlbWFpbCI6ImphZGVpbHNvbkBnbWFpbC5jb20iLCJwYXNcd29yZCI6InNlbmhhMTIrNCJ9.U3EAKCNgFbOdhEwk8rLqdTx9Qo395IquTgImY0P0__k
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      Conta:
 *        type: object
 *        required: 
 *          - nome 
 *          - email
 *          - password
 *        properties: 
 *          id:
 *            type: number
 *          nome:
 *            type: string
 *          password:
 *            type: string
 *          valor:
 *            type: number
 *          email:
 *            type: string
 *        example:
 *            nome: teste
 *            email: teste@gmail.com
 *            valor: 0
 */


/**
 * @swagger
 *  /user:
 *    get:
 *      tags: [User]
 *      description: Este Endpoint retorna uma lista de usuarios
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Conta' 
 */
userRouter.get('/',  async (req: Request, res: Response): Promise<Response> => {
  const allUser = await userServices.getAllUser(); 
  return res.status(StatusCodes.OK).json(allUser);
});

/**
 * @swagger
 *  /user:
 *    post:
 *      tags: [User]
 *      description: Este Endpoint é responsavel por criar um novo usuario
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/Token' 
 */
userRouter.post(
  '/',
  validateSchemaUser,
  async (req: Request, res: Response): Promise<Response> => {
    const newUser = await userServices.createdUser(req.body); 
    return res.status(StatusCodes.CREATED).json(newUser);
  },
);


export default userRouter;