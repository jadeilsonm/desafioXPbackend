import express from 'express';
import { AppDataSource } from './data-source';
import router from './routes';

AppDataSource.initialize().then(() => {
  const app = express ();

  app.use(express.json());

  app.use(router);

  const PORT = process.env.SERVER_PORT || 3000;
  
  return app.listen(PORT, () => console.log(
    `Server is running on PORT: ${PORT}`,
  ));

});


