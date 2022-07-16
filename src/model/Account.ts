import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn()
    codCliente: number;

  @Column({ type: 'decimal' })
    valor: number;
}