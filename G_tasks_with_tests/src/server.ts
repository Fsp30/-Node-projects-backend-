import app from './imports/express'
import taskRoutes from "./routes/taskRoutes"

app.use("/tasks", taskRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

export default app