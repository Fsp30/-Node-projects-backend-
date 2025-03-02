import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateModuleDto {
  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsInt()
  courseId: number
}
