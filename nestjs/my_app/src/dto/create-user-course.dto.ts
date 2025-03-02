import { IsNotEmpty, IsInt, IsDateString } from 'class-validator';

export class CreateUserCourseDto {
  @IsNotEmpty()
  @IsInt()
  userId: number

  @IsNotEmpty()
  @IsInt()
  courseId: number

  @IsNotEmpty()
  @IsDateString()
  startDate: string
}
