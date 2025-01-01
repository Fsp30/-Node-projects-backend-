import Fastify from 'fastify'
import {sendChatMessage} from './api/openai'

const app = Fastify()
const chatHistory: {role:string; content: string } [] = []

app.post('/chat', async (request, reply) =>{
    const {message} = request.body as {message:string}
    if(!message){
        return reply.status(400).send({error: "É necessário uma mensagem 💭"})
    }

    chatHistory.push({ role: 'user', content: message })
    try{
        const response = await sendChatMessage(chatHistory)
        chatHistory.push({role: 'assitent', content: response})
        return {response}
    }catch{
        return reply.status(500).send({error: "Erro ao processar mensagem"})
    }
})

app.post('/caht/reset', async (_ , reply) =>{
    chatHistory.length = 0
    return reply.send({message: 'Historico limpo'})
})

app.listen({port:3500}, (address) =>{
    console.log(`Servidor na porta ${address}`)
})