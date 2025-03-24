import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "src/core/users/entities/user.entity";
import { UserRepository } from "src/core/users/repositories/user.repository";
import { CreateUserDto } from "src/dto/create-user.dto";
import { UpdateUserDto } from "src/dto/update-user.dto";
import { EmailService } from "./email.service.interface";

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly emailService: EmailService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.createUser(createUserDto)
    await this.emailService.sendMail(
      (await user).email,
      'Seja muito bem vindo!',
      'Olá, estamos contentes que você decidiu se cadastrar em nossa plataforma, fique a vontade para consumir todo o conteúdo presente nela'
    )
    return user
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.getAllUsers()
  }

  async getUserById(id: number): Promise<User> {
    const user = await this.userRepository.getUserById(id)
    if (!user) throw new NotFoundException(`Usuário não encontrado id:#${id}`)
    return user
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
    const user = await this.userRepository.getUserById(id)
    if (!user) throw new NotFoundException(`Usuário não encontrado id:#${id}`)
    return this.userRepository.updateUser(id, updateUserDto)
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.userRepository.getUserById(id)
    if (!user) throw new NotFoundException(`Usuário não encontrado id:#${id}`)
    await this.userRepository.deleteUser(id)
  }
}
