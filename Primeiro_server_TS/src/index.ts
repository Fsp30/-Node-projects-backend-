import Fastify from 'fastify'

const app = Fastify()

app.get('/', async (req,reply) =>{
    reply.send('Primeiro Server em Ts rodando 😁')
})
app.listen({port: 3000},() =>{
    console.log('Servidor rodando na porta http://localhost:3000')
})