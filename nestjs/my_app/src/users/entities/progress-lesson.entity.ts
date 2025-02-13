import {Entity, PrimaryGeneratedColumn, ManyToOne, Column} from 'typeorm'
import { User } from './user.entity'
import { Lesson } from './lesson.entity'

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