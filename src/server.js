const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const server = Hapi.server({
  port: 9000,
  host: 'localhost',
  routes: {
    cors: {
      origin: ['*'],
    }
  }
});

const init = async () => {
  server;
  server.route(routes);
  await server.start();
  console.log(`Server is listening at ${server.info.uri}`);
};

init();