import express from 'express'
import { register, login } from './controllers/authController'
import { getNotifications, createNotification } from './controllers/notificationController'
import { authenticateToken } from './utils/jwtUtils'

const app = express()

app.use(express.json())

app.post('/register', register)
app.post('/login', login)
app.get('/notifications', authenticateToken, getNotifications)
app.post('/notifications', authenticateToken, createNotification)

export default app
