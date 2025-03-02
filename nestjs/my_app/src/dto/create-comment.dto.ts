import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  content: string

  @IsNotEmpty()
  @IsInt()
  userId: number

  @IsNotEmpty()
  @IsInt()
  courseId: number
}
