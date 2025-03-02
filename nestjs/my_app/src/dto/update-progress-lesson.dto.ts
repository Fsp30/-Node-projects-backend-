import { IsOptional, IsEnum } from 'class-validator';
import { StatusCourse } from 'src/enums/status-courses';

export class UpdateProgressLessonDto {
  @IsOptional()
  @IsEnum(StatusCourse)
  status?: StatusCourse;
}
