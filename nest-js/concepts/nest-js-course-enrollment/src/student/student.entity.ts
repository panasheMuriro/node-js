import { Enrollment } from 'src/enrollment/enrollment.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Enrollment, (enrollment) => enrollment.student, {
    eager: true,
  })
  enrollments: Enrollment[];
}
