import { DataSource } from 'typeorm'
import { User } from '../users/entities/user.entity'
import { Certificate } from 'src/users/entities/certificate.entity'
import { Comments } from 'src/users/entities/comment.entity'
import { Course } from 'src/users/entities/course.entity'
import { Lesson } from 'src/users/entities/lesson.entity'
import { Modules } from 'src/users/entities/module.entity'
import { ProgressLesson } from 'src/users/entities/progress-lesson.entity'
import { Teacher } from 'src/users/entities/teacher.entity'
import { UserCourse } from 'src/users/entities/user-course.entity'

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
