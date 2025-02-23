import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { Certificate } from './entities/certificate.entity';
import { Comments } from '../comment/entities/comment.entity';
import { Course } from '../course/entities/course.entity';
import { Lesson } from '../lessons/entity/lesson.entity';
import { Modules } from '../module/entities/module.entity';
import { ProgressLesson } from '../progress-lesson/entities/progress-lesson.entity';
import { Teacher } from '../teacher/entities/teacher.entity';
import { UserCourse } from '../user-course/entities/user-course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Certificate, Comments, Course, Lesson, Modules, ProgressLesson, Teacher, UserCourse])], 
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], 
})
export class UsersModule {}
