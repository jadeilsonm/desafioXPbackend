import express, { Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';
import { AppDataSource } from './data-source';
import httpErrorMiddleware from './middleware/httpErrorMiddleware';
import router from './routes';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import swaggerConfig from './docs/swagger.config';
import path from 'path';

AppDataSource.initialize().then(() => {
  const app = express ();

  const swaggerDocs = swaggerJSDoc(swaggerConfig);

  app.use(express.json());

  app.use(cors());

  app.get('/', (_req: Request, res: Response) => {
    res.sendFile(path.join(__dirname + '/index.html'));
  });

  app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

  app.use(router);

  app.use(httpErrorMiddleware);

  const PORT = process.env.PORT || 3000;
  
  return app.listen(PORT, () => console.log('Server up'));

});


