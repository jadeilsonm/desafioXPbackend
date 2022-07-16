import { Request, Response, Router } from 'express';

import StatusCodes from '../utils/StatusCodes';

const accountRouter = Router();

accountRouter.post(
  '/', 
  async (req: Request, res: Response): Promise<Response> => {

    return res.status(StatusCodes.OK).json();
  },
);

export default accountRouter;