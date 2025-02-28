import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UsersModule } from './core/users/users.module';
import { User } from './core/users/entities/user.entity';
import { Certificate } from './core/certificate/entities/certificate.entity';
import { Comments } from './core/comment/entities/comment.entity';
import { Course } from './core/course/entities/course.entity';
import { Lesson } from './core/lessons/entity/lesson.entity';
import { Modules } from './core/module/entities/module.entity';
import { ProgressLesson } from './core/progress-lesson/entities/progress-lesson.entity';
import { Teacher } from './core/teacher/entities/teacher.entity';
import { UserCourse } from './core/user-course/entities/user-course.entity';
import { CertificateModule } from './core/modules/certificate.module';
import { CommentModule } from './core/modules/comment.module';
import { CourseModule } from './core/modules/course.module';
import { LessonModule } from './core/modules/lesson.module';
import { ModuleModule } from './core/modules/module.module';
import { ProgressLessonModule } from './core/modules/progress-lesson.module';
import { TeacherModule } from './core/modules/teacher.module';
import { UserCourseModule } from './core/modules/user-course.module';
import { UserModule } from './core/modules/user.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([User, Certificate, Comments,Course, Lesson, Modules, ProgressLesson, Teacher, UserCourse]),
    TypeOrmModule.forRoot({
      type:'postgres', 
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database:'mydb',
      autoLoadEntities: true,
      synchronize: false,
      migrationsRun: true,
    }),
    UsersModule,
    CertificateModule,
    CommentModule,
    CourseModule,
    LessonModule,
    ModuleModule,
    ProgressLessonModule,
    TeacherModule,
    UserCourseModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
