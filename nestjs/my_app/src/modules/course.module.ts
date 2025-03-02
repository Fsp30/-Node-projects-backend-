import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from '../core/course/entities/course.entity';
import { CourseRepository } from '../core/course/repository/course.repository';

@Module({
    imports:[TypeOrmModule.forFeature([Course])],
    providers: [CourseRepository],
    exports: [CourseRepository]
})
export class CourseModule {}
