import { DataSource } from 'typeorm'
import { User } from '../core/users/entities/user.entity'
import { Certificate } from 'src/users/entities/certificate.entity'
import { Comments } from 'src/core/comment/entities/comment.entity'
import { Course } from 'src/core/course/entities/course.entity'
import { Lesson } from 'src/core/lessons/entity/lesson.entity'
import { Modules } from 'src/core/module/entities/module.entity'
import { ProgressLesson } from 'src/core/progress-lesson/entities/progress-lesson.entity'
import { Teacher } from 'src/core/teacher/entities/teacher.entity'
import { UserCourse } from 'src/core/user-course/entities/user-course.entity'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'mydb',
  entities: [User, Certificate, Comments, Course, Lesson, Modules, ProgressLesson, Teacher, UserCourse],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
  logging: true,
})
