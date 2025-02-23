import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { Course } from "../../course/entities/course.entity"
import { Lesson } from "../../lessons/entity/lesson.entity"


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