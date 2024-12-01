import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

@Controller('example') // The route prefix for all methods in this controller
export class AppController {
  @Get()
  getExample(): string {
    return 'This is a GET request!';
  }

  @Post()
  createExample(@Body() body: any): string {
    return `This is a POST request with data: ${JSON.stringify(body)}`;
  }

  @Put(':id')
  updateExample(@Param('id') id: string, @Body() body: any): string {
    return `This is a PUT request to update ID: ${id} with data: ${JSON.stringify(body)}`;
  }

  @Delete(':id')
  deleteExample(@Param('id') id: string): string {
    return `This is a DELETE request to remove ID: ${id}`;
  }
}
