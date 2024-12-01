import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './students/student.controller';
import { StudentService } from './students/student.service';

@Module({
  imports: [],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
