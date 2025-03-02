import { IsNotEmpty, IsString, IsInt, IsEmail } from 'class-validator';

export class CreateTeacherDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsInt()
  userId: number

  @IsNotEmpty()
  @IsEmail()
  email:string
}
