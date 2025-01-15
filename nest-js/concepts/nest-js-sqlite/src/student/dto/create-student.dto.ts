import { IsString, IsEmail, IsInt, Min } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(1)
  age: number;
}
