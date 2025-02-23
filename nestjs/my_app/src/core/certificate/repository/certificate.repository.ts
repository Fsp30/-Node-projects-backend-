import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Certificate } from '../entities/certificate.entity'

@Injectable()
export class CertificateRepository {
  constructor(@InjectRepository(Certificate) private readonly repo: Repository<Certificate>) {}

  async createCertificate(data: Partial<Certificate>): Promise<Certificate> {
    return this.repo.save(data)
  }
  async getAllCertificate(): Promise<Certificate[]> {
    return this.repo.find()
  }
  async getCertificateById(id: number): Promise<Certificate | null> {
    return this.repo.findOne({ where: { id } })
  }
  async updateCertificate(id: number, data: Partial<Certificate>): Promise<Certificate | null> {
    await this.repo.update(id, data)
    return this.getCertificateById(id)
  }
  async deleteCertificate(id: number): Promise<void> {
    await this.repo.delete(id)
  }
}
