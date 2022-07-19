
import { Request, Response, Router } from 'express';

import StatusCodes from '../utils/StatusCodes';

const activeRouter = Router();

activeRouter.post(
  '/', 
  async (__req: Request, res: Response): Promise<Response> => {

    return res.status(StatusCodes.OK).json();
  },
);

export default activeRouter;