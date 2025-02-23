import {Injectable} from '@nestjs/common'
import {Repository} from 'typeorm'
import {InjectRepository} from '@nestjs/typeorm'
import { Course } from '../entities/course.entity'


@Injectable()
export class CourseRepository{
    constructor(@InjectRepository(Course) private readonly repo: Repository<Course>){}

    async createCourse(course: Partial<Course>):Promise<Course>{
        return this.repo.save(course)
    }
    async getAllCourses():Promise<Course[]>{
        return this.repo.find()
    }
    async getCourseById(id:number):Promise<Course | null>{
        return this.repo.findOne({where: {id}})
    }
    async updateCourse(id:number, data:Partial<Course>): Promise<Course | null>{
        await this.repo.update(id, data)
        return this.getCourseById(id)
    }
    async deleteCourse(id:number):Promise<void>{
        await this.repo.delete(id)
    }
}