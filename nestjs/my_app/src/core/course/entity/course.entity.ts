import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, OneToMany, JoinTable } from 'typeorm'
import { Teacher } from '../../teacher/entities/teacher.entity'
import {Modules} from '../../module/entities/module.entity'

@Entity('courses')
export class Course{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column({nullable: true})
    describe: string

    @Column({default: true})
    free: boolean

    @Column({nullable: true})
    nivel: string

    @ManyToMany(() => Teacher, (teacher) => teacher.courses)
    @JoinTable()
    teacher: Teacher[]

    @OneToMany(() => Modules, (modules) => modules.course)
    module: Modules[]
}