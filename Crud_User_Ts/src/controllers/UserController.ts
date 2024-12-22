import { FastifyInstance } from "fastify"
import { z } from "zod"
import { userSchema } from "../schemas/UserSchema"
import { userService } from "../services/userService"

export async function userRoutes(app: FastifyInstance) {
  // Criar usuário
  app.post("/users", async (request, reply) => {
    try {
      const user = userSchema.parse(request.body)
      const createdUser = userService.create(user)
      return reply.code(201).send(createdUser)
    } catch {
      return reply.code(400).send({message: 'Falha na criação do usuário'})
    }
  })

  app.get("/users", async (_, reply) => {
    const users = userService.findAll()
    return reply.code(200).send(users)
  })

  app.get("/users/:id", async (request, reply) => {
    const params = z.object({ id: z.string() }).parse(request.params)
    const user = userService.findById(params.id)
    if (!user) return reply.code(404).send({ message: "Usuário não encontrado" })

    return reply.code(200).send(user)
  });

  app.put("/users/:id", async (request, reply) => {
    try {
      const params = z.object({ id: z.string() }).parse(request.params)
      const data = userSchema.partial().parse(request.body)

      const updatedUser = userService.update(params.id, data)
      if (!updatedUser) return reply.code(404).send({ message: "Usuário não encontrado" })
      return reply.code(200).send(updatedUser)
    } catch  {
      return reply.code(400)
    }
  });

  // Excluir usuário
  app.delete("/users/:id", async (request, reply) => {
    const params = z.object({ id: z.string() }).parse(request.params)
    const deleted = userService.delete(params.id)

    if (!deleted) return reply.code(404).send({ message: "Usuário não encontrado" });

    return reply.code(204).send();
  });

  app.get("/users/name/:name", async (request, reply) => {
    const params = z.object({ name: z.string() }).parse(request.params);
    const user = userService.findByName(params.name);

    if (!user) return reply.code(404).send({ message: "Usuário não encontrado" });

    return reply.code(200).send(user);
  });

  // Buscar por Idade
  app.get("/users/age/:age", async (request, reply) => {
    const params = z.object({ age: z.preprocess((a) => Number(a), z.number().int().positive()) }).parse(request.params);
    const user = userService.findByAge(params.age);

    if (!user) return reply.code(404).send({ message: "Usuário não encontrado" });

    return reply.code(200).send(user);
  });

  // Buscar por Email
  app.get("/users/email/:email", async (request, reply) => {
    const params = z.object({ email: z.string().email() }).parse(request.params);
    const user = userService.findByEmail(params.email);

    if (!user) return reply.code(404).send({ message: "Usuário não encontrado" });

    return reply.code(200).send(user);
  });
}
