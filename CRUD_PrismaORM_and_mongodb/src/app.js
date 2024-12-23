import express from 'express' 
import bodyParser from 'body-parser'
import router from '../routes/routes'

const app = express()
app.use(bodyParser.json())
app.use('/user', router)


export default app