import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgressLesson } from '../core/progress-lesson/entities/progress-lesson.entity';
import { ProgressLessonRepository } from '../core/progress-lesson/repository/progress-lesson.repository';

@Module({
    imports:[TypeOrmModule.forFeature([ProgressLesson])],
    providers:[ProgressLessonRepository],
    exports:[ProgressLessonRepository]
})
export class ProgressLessonModule {}
