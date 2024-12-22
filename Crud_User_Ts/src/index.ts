import Fastify from 'fastify'
import { userRoutes } from './controllers/UserController'

const app = Fastify()

app.register(userRoutes)
app.listen({port:3000}, ()=> {
    console.log('Servidor rodando em http://localhost:3000')
})