import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  async createCourse(name: string, description: string): Promise<Course> {
    const course = this.courseRepository.create({ name, description });
    return this.courseRepository.save(course);
  }

  async getAllCourses(): Promise<Course[]> {
    return this.courseRepository.find();
  }

  async getCourseById(id: number): Promise<Course | undefined> {
    return this.courseRepository.findOne({ where: { id } });
  }
}
