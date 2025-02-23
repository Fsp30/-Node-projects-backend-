import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Comments } from '../entities/comment.entity'

@Injectable()
export class CommentRepository {
  constructor(@InjectRepository(Comments) private readonly repo: Repository<Comments>) {}

  async createComment(data: Partial<Comments>): Promise<Comments> {
    return this.repo.save(data)
  }
  async getAllComments(): Promise<Comments[]> {
    return this.repo.find()
  }
  async getCommentById(id: number): Promise<Comments | null> {
    return this.repo.findOne({ where: { id } })
  }
  async updateComment(id: number, data: Partial<Comments>): Promise<Comments | null> {
    await this.repo.update(id, data)
    return this.getCommentById(id)
  }
  async deleteComment(id: number): Promise<void> {
    await this.repo.delete(id)
  }
}
