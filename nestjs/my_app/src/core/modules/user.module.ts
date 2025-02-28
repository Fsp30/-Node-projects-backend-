import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { UserRepository } from '../users/repositories/user.repository';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserRepository],
    exports: [UserRepository]
})
export class UserModule {}
