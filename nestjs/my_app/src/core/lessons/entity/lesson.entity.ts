import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from "typeorm"
import { Modules } from "../../module/entities/module.entity"

@Entity('lesson')
export class Lesson{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title: string

    @Column({nullable: true})
    describe: string

    @ManyToMany(() => Modules, (module) => module.lesson)
    module: Modules
}