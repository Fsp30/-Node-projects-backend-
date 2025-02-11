import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service'
import { User } from './entities/user.entity'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Controller('users')
export class UsersController{
  constructor(private readonly usersService:UsersService){}

  @Post()
  async create(@Body() createUserDto:CreateUserDto):Promise<User>{
    return this.usersService.createUser(createUserDto)
  } 

  @Get()
  async getAllUsers():Promise<User[]>{
    return await this.usersService.getAllUsers()
  }
  
  @Get(':id')
  async getUserById(@Param('id') id:number):Promise<User>{
    const user = await this.usersService.getUserById(+id)
    if(!user) throw new NotFoundException(`Usuário não encontrado id:#${id}`)
    return user
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(+id, updateUserDto)
  }

  @Delete(':id')
  async deleteUser(@Param('id') id:number):Promise<void>{
    await this.usersService.deleteUser(+id)
  }
}


