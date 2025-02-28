import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm'
import { User } from '../../users/entities/user.entity'
import { Course } from 'src/core/course/entities/course.entity'

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