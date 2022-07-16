import { Request, Response, Router } from 'express';

import StatusCodes from '../utils/StatusCodes';

const investmentRouter = Router();

investmentRouter.post(
  '/', 
  async (req: Request, res: Response): Promise<Response> => {

    return res.status(StatusCodes.OK).json();
  },
);

export default investmentRouter;