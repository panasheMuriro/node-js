import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAllStudents(): any[] {
    return this.studentService.getAllStudents();
  }

  @Post()
  addStudent(@Body() student: any): string {
    return this.studentService.addStudent(student);
  }

  @Put(':id')
  updateStudent(@Param('id') id: number, @Body() updatedStudent: any): string {
    return this.studentService.updateStudent(id, updatedStudent);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: number): string {
    return this.studentService.deleteStudent(id);
  }
}
