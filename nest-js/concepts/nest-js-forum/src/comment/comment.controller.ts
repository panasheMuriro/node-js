import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  // Create a comment for a specific post with userId
  @Post('create/:postId')
  async createComment(
    @Param('postId') postId: number, // The postId for which the comment is being created
    @Body() body: { content: string; userId: number }, // Include userId in the body
  ) {
    return this.commentService.createComment(postId, body.content, body.userId);
  }

  // Get all comments for a specific post
  @Get('post/:postId')
  async getComments(@Param('postId') postId: number) {
    return this.commentService.getComments(postId);
  }
}
