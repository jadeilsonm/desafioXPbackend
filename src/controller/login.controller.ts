import { Request, Response, Router } from 'express';
import loginUser from '../services/login.services';

import StatusCodes from '../utils/StatusCodes';

const loginRouter = Router();

/**
 * @swagger
 *  tags:
 *    name: Login
 *    description: EndPoint Login
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      Login:
 *        type: object
 *        required: 
 *          - email
 *          - password
 *        properties: 
 *          password:
 *            type: string
 *          email:
 *            type: string
 *        example:
 *            password: teste123
 *            email: teste@gmail.com
 */

/**
 * @swagger
 *  /login:
 *    post:
 *      tags: [Login]
 *      description: Este Endpoint é responsavel pelo login do usuario
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Login'
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/Token' 
 */

loginRouter.post(
  '/', 
  async (req: Request, res: Response): Promise<Response> => {
    const token = await loginUser(req.body);
    return res.status(StatusCodes.OK).json(token);
  },
);

export default loginRouter;