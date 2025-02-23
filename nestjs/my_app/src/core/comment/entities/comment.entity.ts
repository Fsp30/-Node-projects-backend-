import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm'
import { User } from '../../users/entities/user.entity'
import { Course } from '../../course/entities/course.entity'

@Entity('comments')
export class Comments{
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(() => User)
    user:User

    @ManyToOne(() => Course)
    course: Course

    @Column()
    comment: string

    @Column({type: 'int', default:10})
    assessment: number

}
