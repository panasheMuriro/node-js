import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { PostService } from '../post/post.service';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    private postService: PostService,
  ) {}

  async createComment(postId: number, content: string): Promise<Comment> {
    const post = await this.postService.getPostById(postId);
    const comment = this.commentRepository.create({ content, post });
    post.commentCount += 1; // Increment the comment count on the post
    await this.postService.createPost(post.title, post.content); // Update the post with new comment count
    return this.commentRepository.save(comment);
  }

  async getComments(postId: number): Promise<Comment[]> {
    return this.commentRepository.find({ where: { post: { id: postId } } });
  }
}
