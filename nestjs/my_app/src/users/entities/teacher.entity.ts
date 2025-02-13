import {Column, Entity, PrimaryGeneratedColumn, ManyToMany} from 'typeorm'
import {Course} from './course.entity'

@Entity('teacher')
export class Teacher{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name:string
    
    @Column({unique: true})
    email:string

    @ManyToMany(() => Course, (course)=> course.teacher)
    courses: Course[]
    

}