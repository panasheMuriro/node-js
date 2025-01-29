import { Body, Controller, Get, Post } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('courses')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Post()
  async createCourse(@Body() body: { name: string; description: string }) {
    return this.courseService.createCourse(body.name, body.description);
  }

  @Get()
  async getAllCourses() {
    return this.courseService.getAllCourses();
  }
}
