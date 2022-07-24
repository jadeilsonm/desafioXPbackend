const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Documentação do desafio tecnico XP',
      description: 'API de ativos e investimentos, simulando uma das atividades diarias dentro da XP.',
      version: '1.0'
    },servers: [{
      url: 'http://localhost:3000',
      description: 'Servidor Local'
    },{
      url: 'https://desafioxpjadeilson.herokuapp.com',
      description: 'Servidor produção'
    }], 
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          schema: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },apis: ['./src/routes.ts', './src/controller/*ts']
};

export default swaggerConfig;
