import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async createStudent(name: string, email: string): Promise<Student> {
    const student = this.studentRepository.create({ name, email });
    return this.studentRepository.save(student);
  }

  async getAllStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async getStudentById(id: number): Promise<Student | undefined> {
    return this.studentRepository.findOne({
      where: { id },
      relations: ['enrollments', 'enrollments.course'],
    });
  }
}
