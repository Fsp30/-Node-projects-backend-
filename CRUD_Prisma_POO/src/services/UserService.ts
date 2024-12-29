import { BaseService } from "./BaseServices"
import prisma from "../database/prismaClient"
import { CryptoUtil } from "../utils/CryptoUtil"
import { ValidationUtil } from "../utils/ValidationUtil"
import {IdUtil} from '../utils/IdUtil'
import { User } from "../models/User"

export class UserService extends BaseService<User> {
  async create(data: Partial<User>): Promise<User> {
    if(!ValidationUtil.isNotEmptyString(data.email! || data.name! || data.password!))
    if (!ValidationUtil.validateEmail(data.email!)) {
      throw new Error("Formato de email inválido");
    }
    const id = IdUtil.generateUUID()
    const hashedPassword = CryptoUtil.hashPassword(data.password!);
    return await prisma.user.create({
      data: {
        id,
        name: data.name!,
        email: data.email!,
        password: hashedPassword,
      },
    });
  }
  async getAllItems():Promise<User[] >{
    return await prisma.user.findMany()
  }
  async findById(id: string): Promise<User | null> {
    return await prisma.user.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<User>): Promise<User> {
    return await prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({ where: { id } });
  }
}
