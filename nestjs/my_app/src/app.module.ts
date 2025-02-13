import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Certificate } from './users/entities/certificate.entity';
import { Comments } from './users/entities/comment.entity';
import { Course } from './users/entities/course.entity';
import { Lesson } from './users/entities/lesson.entity';
import { Modules } from './users/entities/module.entity';
import { ProgressLesson } from './users/entities/progress-lesson.entity';
import { Teacher } from './users/entities/teacher.entity';
import { UserCourse } from './users/entities/user-course.entity';


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
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
