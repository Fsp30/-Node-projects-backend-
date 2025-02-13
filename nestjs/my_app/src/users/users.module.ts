import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { Certificate } from './entities/certificate.entity';
import { Comments } from './entities/comment.entity';
import { Course } from './entities/course.entity';
import { Lesson } from './entities/lesson.entity';
import { Modules } from './entities/module.entity';
import { ProgressLesson } from './entities/progress-lesson.entity';
import { Teacher } from './entities/teacher.entity';
import { UserCourse } from './entities/user-course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Certificate, Comments, Course, Lesson, Modules, ProgressLesson, Teacher, UserCourse])], 
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], 
})
export class UsersModule {}
