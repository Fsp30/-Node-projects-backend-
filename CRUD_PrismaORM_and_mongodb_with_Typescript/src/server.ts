import Fastify from 'fastify';
import userRoutes from './routes/userRoutes';
import itemRoutes from './routes/itemRoutes';

const app = Fastify();

app.register(userRoutes, { prefix: '/users' });
app.register(itemRoutes, { prefix: '/items' });

app.listen({ port: 3000 }, ( address) => {
  console.log(`Servidor rodando em ${address}`);
});
