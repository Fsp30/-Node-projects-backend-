import { Entity, PrimaryGeneratedColumn, ManyToMany, Column } from "typeorm"
import { User } from "./user.entity"
import { Course } from "./course.entity"
import { StatusCourse } from "src/enums/status-courses"

@Entity('userCourse')
export class UserCourse{
    @PrimaryGeneratedColumn()
    id:number

    @ManyToMany(() => User, (user) => user.course)
    user: User

    @ManyToMany(() => Course)
    course: Course

    @Column({type: 'date', nullable: true})
    dateStart: Date

    @Column({type: 'enum', enum: StatusCourse, default: StatusCourse.EM_ANDAMENTO})
    status: StatusCourse
}