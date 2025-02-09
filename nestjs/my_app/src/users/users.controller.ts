import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service'
import { User } from './entities/user.entity'

@Controller('users')
export class UsersController{
  constructor(private readonly usersService:UsersService){}

  @Post()
  async create(@Body() body:{name:string, email:string}):Promise<User>{
    return this.usersService.createUser(body.name, body.email)
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
  async updateUser(@Param('id') id:number, @Body() body:{ name?:string, email?:string}):Promise<User>{
    const user = await this.usersService.updateUser(+id, body.name, body.email)
    return user
  }

  @Delete(':id')
  async deleteUser(@Param('id') id:number):Promise<void>{
    await this.usersService.deleteUser(+id)
  }
}


