import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Certificate } from '../core/certificate/entities/certificate.entity';
import { CertificateRepository } from '../core/certificate/repository/certificate.repository';
@Module({
  imports: [TypeOrmModule.forFeature([Certificate])],
  providers: [CertificateRepository],
  exports: [CertificateRepository],
})
export class CertificateModule {}
