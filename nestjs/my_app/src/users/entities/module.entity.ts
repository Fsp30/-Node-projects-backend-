import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { Course } from "./course.entity"
import { Lesson } from "./lesson.entity"


@Entity('modules')
export class Modules{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name:string
    
    @ManyToOne(() => Course, (course) => course.module)
    course: Course

    @OneToMany(() => Lesson, (lesson) => lesson.module)
    lesson: Lesson[]
}