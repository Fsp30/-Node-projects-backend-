import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, OneToMany } from "typeorm"
import { UserRole } from "../../enums/users-roles"
import { UserCourse } from './user-course.entity'

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()    
    id:number

    @Column()
    name: string

    @Column({unique: true})
    email:string

    @Column()
    password: string

    @OneToMany(() => UserCourse, (userCourse) => userCourse.user )
    course: UserCourse[]

    @Column({ type: 'enum', enum: UserRole, default: UserRole.FREE})
    role: UserRole
}
