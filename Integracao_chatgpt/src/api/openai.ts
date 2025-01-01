import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const API = process.env.API_KEY || ""

const openaiApi = axios.create({
    baseURL: 'https://api.openai.com/v1',
    headers:{
        'Authorization': `Bearer ${API}`,
        'Content-Type': 'application/json'
    }
})

export const sendChatMessage = async (messages: {role: string; content: string} []) =>{
    try{
        const response = await openaiApi.post('/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: messages
        })
        return response.data.choices[0].message.content
    }catch{
        console.error("Erro ao enviar mensagem para a IA")
        console.log("Chave de API:", API)

    }
}