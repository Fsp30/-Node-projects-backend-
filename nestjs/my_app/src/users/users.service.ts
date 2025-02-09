import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ){}

  async createUser(name:string, email:string):Promise<User>{
    const user = await this.userRepository.create({name, email})
    return this.userRepository.save(user)
  }

  async getAllUsers():Promise<User[]>{
   return await this.userRepository.find()
  }

  async getUserById(id:number): Promise<User>{
    const user = await this.userRepository.findOne({where: {id}})
    if(!user) throw new NotFoundException(`Usuário não encontrado id:#${id}`)
    return user
  }

  async updateUser(id:number, name?:string, email?:string):Promise<User>{
    const user = await this.userRepository.findOne({where: {id}})
    if(!user) throw new NotFoundException(`Usuário não encontrado id:#${id}`)
    if(name) user.name = name
    if(email) user.email = email
    return this.userRepository.save(user)
  }

  async deleteUser(id:number):Promise<void>{
    const user = await this.userRepository.findOne({where: {id}})
    if(!user) throw new NotFoundException(`Usuário não encontrado id:#${id}`)
    await this.userRepository.remove(user)
  }
} 