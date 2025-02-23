import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Lesson } from "../entity/lesson.entity"
import { Repository } from "typeorm"

@Injectable()
export class LessonRepository{
    constructor(@InjectRepository(Lesson) private readonly repo:Repository<Lesson>){}

    async createLesson(lesson: Partial<Lesson>):Promise<Lesson>{
        return this.repo.save(lesson)
    }
    async getAllLessons():Promise<Lesson[]>{
        return this.repo.find()
    }
    async getLessonById(id:number):Promise<Lesson | null>{
        return this.repo.findOne({where: {id}})
    }
    async updateLesson(id:number, data:Partial<Lesson>):Promise<Lesson | null>{
        await this.repo.update(id, data)
        return this.getLessonById(id)
    }
    async deleteLesson(id:number):Promise<void>{
        this.repo.delete(id)
    }
}
