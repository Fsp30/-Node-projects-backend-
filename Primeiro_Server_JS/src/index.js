import express from 'express'

const server = express()
server.use(express.json())

server.get('/', (req,res)=>{
    res.send("Primeiro Servidor em Js 👍 (esse é só o começo)")
})

server.listen(3000, () =>{
    console.log('Servidor rodando na porta http://localhost:3000')
})