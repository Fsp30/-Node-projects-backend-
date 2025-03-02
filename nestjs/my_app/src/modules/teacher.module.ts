import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from '../core/teacher/entities/teacher.entity';
import { TeacherRepository } from '../core/teacher/repository/teacher.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Teacher])],
    providers: [TeacherRepository],
    exports: [TeacherRepository]
})
export class TeacherModule {}
