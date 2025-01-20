// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   ManyToOne,
//   OneToMany,
// } from 'typeorm';
// import { User } from '../user/user.entity';
// import { Comment } from 'src/comment/comment.entity';

// @Entity()
// export class Post {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   title: string;

//   @Column()
//   content: string;

//   @ManyToOne(() => User, (user) => user.posts)
//   user: User;

//   @OneToMany(() => Comment, (comment) => comment.post)
//   comments: Comment[];
// }
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Comment } from '../comment/comment.entity'; // Import Comment entity
import { User } from 'src/user/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ default: 0 })
  commentCount: number; // Track number of comments

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  @OneToMany(() => Comment, (comment) => comment.post, { cascade: true })
  comments: Comment[];
}
