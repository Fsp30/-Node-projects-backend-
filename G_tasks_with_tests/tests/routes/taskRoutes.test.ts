import request from "supertest"
import app from "../../src/server"
import { prisma } from "../../src/imports/prismaClient"

describe("Task Routes", () => {
  let token: string

  beforeAll(async () => {
    token = "jwt_key" 
  })

  afterAll(async () => {
    await prisma.$disconnect()
  })

  it("Deve criar uma nova tarefa", async () => {
    const response = await request(app)
      .post("/tasks")
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "Nova Tarefa",
        description: "Descrição da tarefa",
        priority: "HIGH",
      })

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("id")
  })

  it("Deve obter todas as tarefas", async () => {
    const response = await request(app)
      .get("/tasks")
      .set("Authorization", `Bearer ${token}`)

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

  it("Deve atualizar uma tarefa existente", async () => {
    const newTask = await prisma.task.create({
      data: {
        title: "Atualizar Tarefa",
        description: "Descrição antes da atualização",
        priority: "LOW",
      },
    })

    const response = await request(app)
      .put(`/tasks/${newTask.id}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "Título Atualizado",
        description: "Descrição atualizada",
        priority: "MEDIUM",
      })

    expect(response.status).toBe(200)
    expect(response.body).toMatchObject({
      id: newTask.id,
      title: "Título Atualizado",
      description: "Descrição atualizada",
      priority: "MEDIUM",
    })
  })

  it("Deve deletar uma tarefa", async () => {
    const newTask = await prisma.task.create({
      data: {
        title: "Tarefa para deletar",
        description: "Descrição da tarefa",
        priority: "LOW",
      },
    })

    const response = await request(app)
      .delete(`/tasks/${newTask.id}`)
      .set("Authorization", `Bearer ${token}`)

    expect(response.status).toBe(204)
  })
})
