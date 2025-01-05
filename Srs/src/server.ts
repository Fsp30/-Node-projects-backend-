import express from 'express'
import roomRoutes from './routes/roomRoutes'
import reservationRoutes from './routes/reservesRoutes'
import userRoutes from './routes/userRoutes'

const app = express()
app.use(express.json())

app.use('/api', userRoutes)
app.use('/api', roomRoutes)
app.use('/api', reservationRoutes)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Servidor na porta:  ${port}`)
})
