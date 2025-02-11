import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ){}

  async createUser(createUserDto: CreateUserDto):Promise<User>{
    const user = await this.userRepository.create(createUserDto)
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

  async updateUser(id:number, updateUser: UpdateUserDto):Promise<User>{
    const user = await this.userRepository.findOne({where: {id}})
    if(!user) throw new NotFoundException(`Usuário não encontrado id:#${id}`)
    Object.assign(user,updateUser)
    return this.userRepository.save(user)
  }

  async deleteUser(id:number):Promise<void>{
    const user = await this.userRepository.findOne({where: {id}})
    if(!user) throw new NotFoundException(`Usuário não encontrado id:#${id}`)
    const result = await this.userRepository.delete(user)
      

  }
} 