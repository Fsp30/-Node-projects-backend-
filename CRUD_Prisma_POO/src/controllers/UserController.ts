import { Request, Response } from "express"
import { UserService } from "../services/UserService"
import { ValidationUtil } from "../utils/ValidationUtil"
import { CryptoUtil } from "../utils/CryptoUtil"

const userService = new UserService()

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).send({ message: "Campos obrigatórios não preenchidos." })
    }

    if (!ValidationUtil.validateEmail(email)) {
      return res.status(400).send({ message: "Formato de email inválido." })
    }

    const user = await userService.create({ name, email, password })
    return res.status(201).send({ message: "Usuário criado com sucesso"})
  } catch (error) {
    return res.status(500).send({ message: "Erro ao criar usuário" })
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllItems()
    if (users.length === 0) {
      return res.status(404).send({ message: "Nenhum usuário encontrado." })
    }
    return res.status(200).send(users)
  } catch {
    return res.status(500).send({ message: "Erro ao buscar usuários" })
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.findById(id);
    if (!user) {
      return res.status(404).send({ message: "Usuário não encontrado." })
    }
    return res.status(200).send(user)
  } catch  {
    return res.status(500).send({ message: "Erro ao buscar usuário" })
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const dataToUpdate: Partial<any> = {}
    if (name) dataToUpdate.name = name
    if (email) dataToUpdate.email = email
    if (password) dataToUpdate.password = CryptoUtil.hashPassword(password)

    if (Object.keys(dataToUpdate).length === 0) {
      return res.status(400).send({ message: "Nenhum dado para atualizar." })
    }

    const updatedUser = await userService.update(id, dataToUpdate)
    return res.status(200).send({ message: "Usuário atualizado com sucesso" })
  } catch  {
    return res.status(500).send({ message: "Erro ao atualizar usuário"})
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const itemExists = await userService.findById(id)
    if (!itemExists) {
      return res.status(404).send({ message: "Usuário não encontrado." })
    }
    await userService.delete(id)
    return res.status(200).send({ message: "Usuário deletado com sucesso 🗑️👍" });
  } catch  {
    return res.status(500).send({ message: "Erro ao deletar usuário" })
  }
};
