import {Injectable} from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../entities/user.entity'

@Injectable()
export class UserRepository{
    constructor(@InjectRepository(User) private readonly repo: Repository<User>){}
    
    async getAllUsers(): Promise<User[]>{
        return this.repo.find()
    }
    async getUserById(id:number): Promise<User | null>{
        return this.repo.findOne({where: {id}})
    }
    async createUser(user: Partial<User>):Promise<User>{
        return this.repo.save(user)
    } 
    async updateUser(id:number , data:Partial<User>):Promise<User | null >{
        await this.repo.update(id, data)
        return this.getUserById(id)
    }
    async deleteUser(id:number):Promise<void>{
        await this.repo.delete(id)
    }
}