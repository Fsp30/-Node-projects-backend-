import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Certificate } from '../certificate/entities/certificate.entity';
import { CertificateRepository } from '../certificate/repository/certificate.repository';
@Module({
  imports: [TypeOrmModule.forFeature([Certificate])],
  providers: [CertificateRepository],
  exports: [CertificateRepository],
})
export class CertificateModule {}
