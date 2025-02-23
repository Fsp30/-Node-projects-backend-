import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { UserCourse } from '../entities/user-course.entity'

@Injectable()
export class UserCourseRepository {
  constructor(@InjectRepository(UserCourse) private readonly repo: Repository<UserCourse>) {}

  async create(userCourse: Partial<UserCourse>): Promise<UserCourse> {
    return this.repo.save(userCourse)
  }
  async findAll(): Promise<UserCourse[]> {
    return this.repo.find()
  }
  async findById(id: number): Promise<UserCourse | null> {
    return this.repo.findOne({ where: { id } })
  }
  async update(id: number, data: Partial<UserCourse>): Promise<UserCourse | null> {
    await this.repo.update(id, data)
    return this.findById(id)
  }
  async delete(id: number): Promise<void> {
    await this.repo.delete(id)
  }
}
