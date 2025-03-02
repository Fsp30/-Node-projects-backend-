import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../core/users/entities/user.entity';
import { UserRepository } from '../core/users/repositories/user.repository';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserRepository],
    exports: [UserRepository]
})
export class UserModule {}
