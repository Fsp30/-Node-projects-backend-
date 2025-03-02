import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateLessonDto {
  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsString()
  content: string

  @IsNotEmpty()
  @IsInt()
  moduleId: number
}
