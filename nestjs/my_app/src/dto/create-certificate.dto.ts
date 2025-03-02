import { IsNotEmpty, IsInt, IsDateString } from 'class-validator';

export class CreateCertificateDto {
  @IsNotEmpty()
  @IsInt()
  userId: number

  @IsNotEmpty()
  @IsInt()
  courseId: number

  @IsNotEmpty()
  @IsDateString()
  issueDate: string
}
