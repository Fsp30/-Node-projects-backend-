import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from '../course/entities/course.entity';
import { CourseRepository } from '../course/repository/course.repository';

@Module({
    imports:[TypeOrmModule.forFeature([Course])],
    providers: [CourseRepository],
    exports: [CourseRepository]
})
export class CourseModule {}
