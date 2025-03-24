import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../core/users/entities/user.entity';
import { UserRepository } from '../core/users/repositories/user.repository';
import { UsersService } from 'src/services/users.service';
import { EmailService } from 'src/services/email.service.interface';
import { EmailModule } from './email.module';

@Module({
  imports: [EmailModule, TypeOrmModule.forFeature([User])], 
  providers: [UsersService, UserRepository, EmailService], 
  exports: [UsersService, UserRepository, EmailService],
})
export class UserModule {}
