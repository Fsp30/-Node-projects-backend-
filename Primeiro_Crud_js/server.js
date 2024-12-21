import express from 'express'
const routes = require('./routes/routes')

const app = express()
app.use(express.json())

app.use('/api', routes)

app.listen(3000, () => {
  console.log('Servidor da Api rodando na porta http://localhost:3000')
})