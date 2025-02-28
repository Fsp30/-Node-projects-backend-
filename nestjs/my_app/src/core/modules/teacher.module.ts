import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from '../teacher/entities/teacher.entity';
import { TeacherRepository } from '../teacher/repository/teacher.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Teacher])],
    providers: [TeacherRepository],
    exports: [TeacherRepository]
})
export class TeacherModule {}
