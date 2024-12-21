import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("Primeiro Servidor em Js 👍 (esse é só o começo)")
})

app.listen(3000, () =>{
    console.log('Servidor rodando na porta http://localhost:3000')
})