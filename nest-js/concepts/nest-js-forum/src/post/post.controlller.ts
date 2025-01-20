import { Controller, Post, Body, Get } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('create')
  async createPost(@Body() body: { title: string; content: string }) {
    return this.postService.createPost(body.title, body.content);
  }

  @Get()
  async getAllPosts() {
    return this.postService.getPosts();
  }
}
