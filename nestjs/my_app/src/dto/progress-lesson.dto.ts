import { IsNotEmpty, IsEnum, IsInt } from 'class-validator';
import { StatusCourse } from 'src/enums/status-courses';


export class CreateProgressLessonDto {
  @IsNotEmpty()
  @IsEnum(StatusCourse)
  status: StatusCourse;

  @IsNotEmpty()
  @IsInt()
  userId: number;

  @IsNotEmpty()
  @IsInt()
  lessonId: number;
}
