import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Certifique-se de que isso está aqui!
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // Caso outros módulos precisem usar
})
export class UsersModule {}
