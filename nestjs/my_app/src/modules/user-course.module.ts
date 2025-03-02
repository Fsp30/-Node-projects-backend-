import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCourse } from '../core/user-course/entities/user-course.entity';
import { UserCourseRepository } from '../core/user-course/repository/user-course.repository';

@Module({
    imports: [TypeOrmModule.forFeature([UserCourse])],
    providers: [UserCourseRepository],
    exports: [UserCourseRepository]
})
export class UserCourseModule {}
