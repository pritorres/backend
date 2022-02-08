import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

/* import { Category } from './category.entity'; */

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  stock: boolean;

  @Column()
  category: string; // agregar relacion

  /* @ManyToOne(() => Category)
  @JoinColumn({ name: 'category' })
  category_name: Category; */
}
