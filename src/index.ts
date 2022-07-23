import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import { AppDataSource } from './data-source';
import httpErrorMiddleware from './middleware/httpErrorMiddleware';
import router from './routes';

AppDataSource.initialize().then(() => {
  const app = express ();

  app.use(express.json());

  app.use(cors());

  app.use(router);

  app.use(httpErrorMiddleware);

  const PORT = process.env.PORT || 3000;
  
  return app.listen(PORT, () => console.log(
    `Server is running on PORT: ${PORT}`,
  ));

});


