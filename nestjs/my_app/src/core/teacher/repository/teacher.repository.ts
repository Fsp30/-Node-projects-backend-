import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Teacher } from '../entities/teacher.entity'

@Injectable()
export class TeacherRepository {
  constructor(@InjectRepository(Teacher) private readonly repo: Repository<Teacher>) {}
 
  async createTeacher(teacher: Partial<Teacher>): Promise<Teacher> {
    return this.repo.save(teacher)
  }
  async getAllTeachers(): Promise<Teacher[]> {
    return this.repo.find()
  }
  async getTecherById(id: number): Promise<Teacher | null> {
    return this.repo.findOne({ where: { id } })
  }
  async updateTeacher(id: number, data: Partial<Teacher>): Promise<Teacher | null> {
    await this.repo.update(id, data)
    return this.getTecherById(id)
  }
  async deleteTeacher(id: number): Promise<void> {
    await this.repo.delete(id)
  }
}
