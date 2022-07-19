import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ type: 'integer'})
    id: number;
  @Column({ type: 'varchar', length: 100})
    name: string;
  @Column({ type: 'varchar', length: 150, unique: true})
    email: string;
  @Column({ type: 'varchar', length: 255})
    password: string;
}