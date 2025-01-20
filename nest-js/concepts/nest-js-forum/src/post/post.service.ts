import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async createPost(title: string, content: string): Promise<Post> {
    const post = this.postRepository.create({ title, content });
    return await this.postRepository.save(post);
  }

  async getPosts(): Promise<Post[]> {
    return this.postRepository.find({ relations: ['comments'] });
  }

  async getPostById(id: number): Promise<Post> {
    return this.postRepository.findOne({
      where: { id },
      relations: ['comments'],
    });
  }
}
