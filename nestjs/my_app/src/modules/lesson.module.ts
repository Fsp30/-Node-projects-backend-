import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from '../core/lessons/entity/lesson.entity';
import { LessonRepository } from '../core/lessons/repository/lesson.repository';

@Module({
    imports:[TypeOrmModule.forFeature([Lesson])],
    providers:[LessonRepository],
    exports:[LessonRepository]
})
export class LessonModule {}
