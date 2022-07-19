import { Router } from 'express';
import accountRouter from './controller/account.controller';
import activeRouter from './controller/active.controller';
import investmentRouter from './controller/investment.controller';
import loginRouter from './controller/login.controller';
import userRouter from './controller/user.controller';

const router = Router();

router.use('/user', userRouter);

router.use('/login', loginRouter);

router.use('/conta', accountRouter);

router.use('/ativos', activeRouter);

router.use('/investimentos', investmentRouter);


export default router;
