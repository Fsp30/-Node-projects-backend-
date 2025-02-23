import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { ProgressLesson } from '../entities/progress-lesson.entity'

@Injectable()
export class ProgressLessonRepository {
  constructor(@InjectRepository(ProgressLesson) private readonly repo: Repository<ProgressLesson>) {}

  async createProgress(data: Partial<ProgressLesson>): Promise<ProgressLesson> {
    return this.repo.save(data)
  }
  async getAllProgress(): Promise<ProgressLesson[]> {
    return this.repo.find()
  }
  async getProgressById(id: number): Promise<ProgressLesson | null> {
    return this.repo.findOne({ where: { id } })
  }
  async updateProgress(id: number, data: Partial<ProgressLesson>): Promise<ProgressLesson | null> {
    await this.repo.update(id, data)
    return this.getProgressById(id)
  }
  async deleteProgress(id: number): Promise<void> {
    await this.repo.delete(id)
  }
}
