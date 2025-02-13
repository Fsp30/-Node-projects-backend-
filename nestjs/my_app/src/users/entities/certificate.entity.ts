import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm'
import { User } from './user.entity'
import { Course } from './course.entity'

@Entity('certificates')
export class Certificate{
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(() => User)
    user:User

    @ManyToOne(() => Course)
    course: Course

    @Column()
    dateEmission : Date
}