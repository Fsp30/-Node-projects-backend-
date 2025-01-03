import { Request, Response } from "express"
import { createTask, GetTasksByUserId, updateTask, deleteTask } from "../services/taskService"
import { taskSchema } from "../schema/SchemaTask"

export async function create(req: Request, res: Response): Promise<void> {
  const userId = req.user?.id
  const validationTask = taskSchema.safeParse(req.body)

  if (!validationTask.success) {
    res.status(400).json({ error: '' })
    return
  }

  try {
    const task = await createTask(userId, req.body)
    res.status(201).json(task)
  } catch (error) {
    res.status(500).json({ error: "Failha na criação da tarefa" })
  }
}

export async function list(req: Request, res: Response): Promise<void> {
  const userId = req.user?.id

  try {
    const tasks = await GetTasksByUserId(userId)
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json({ error: "Falha para listar tarefas" })
  }
}

export async function update(req: Request, res: Response): Promise<void> {
  const userId = req.user?.id
  const { id } = req.params

  try {
    const task = await updateTask(id, userId, req.body)

    if (!task) {
      res.status(404).json({ error: "Tarefa não encontrada, ou não pode ser alterada" })
      return
    }

    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ error: "Falha da mudança da tarefa" })
  }
}

export async function remove(req: Request, res: Response): Promise<void> {
  const userId = req.user?.id
  const { id } = req.params

  try {
    const task = await deleteTask(id, userId)

    if (!task) {
      res.status(404).json({ error: "Tarafa não encontrada" })
      return
    }

    res.status(200).json({ message: "Tarefa deletada com sucesso" })
  } catch (error) {
    res.status(500).json({ error: "Falha na deleção de tarefa" })
  }
}
