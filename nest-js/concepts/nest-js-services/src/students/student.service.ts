import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [];

  getAllStudents(): any[] {
    return this.students;
  }

  addStudent(student: any): string {
    this.students.push(student);
    return `Student added successfully!`;
  }

  updateStudent(id: number, updatedStudent: any): string {
    const studentIndex = this.students.findIndex((s) => s.id === id);
    if (studentIndex === -1) {
      return `Student with ID ${id} not found.`;
    }
    this.students[studentIndex] = updatedStudent;
    return `Student with ID ${id} updated successfully!`;
  }

  deleteStudent(id: number): string {
    const studentIndex = this.students.findIndex((s) => s.id === id);
    if (studentIndex === -1) {
      return `Student with ID ${id} not found.`;
    }
    this.students.splice(studentIndex, 1);
    return `Student with ID ${id} deleted successfully!`;
  }
}
