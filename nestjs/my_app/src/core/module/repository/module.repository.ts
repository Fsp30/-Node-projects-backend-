import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Modules } from '../entities/module.entity'

@Injectable()
export class ModuleRepository {
  constructor(@InjectRepository(Modules) private readonly repo: Repository<Modules>) {}

  async createModule(data: Partial<Modules>): Promise<Modules> {
    return this.repo.save(data)
  }
  async getAllModule(): Promise<Modules[]> {
    return this.repo.find()
  }
  async getModuleById(id: number): Promise<Modules | null> {
    return this.repo.findOne({ where: { id } })
  }
  async updateModule(id: number, data: Partial<Modules>): Promise<Modules | null> {
    await this.repo.update(id, data)
    return this.getModuleById(id)
  }
  async deleteModule(id: number): Promise<void> {
    await this.repo.delete(id)
  }
}
