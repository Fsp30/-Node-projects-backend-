import {Entity, PrimaryGeneratedColumn, ManyToOne, Column} from 'typeorm'
import { User } from '../../users/entities/user.entity'
import { Lesson } from '../../lessons/entity/lesson.entity'

@Entity('progessLesson')
export class ProgressLesson{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User)
    user:User

    @ManyToOne(() => Lesson)
    lesson: Lesson

    @Column({type: 'boolean', default: true})
    completed: boolean
}