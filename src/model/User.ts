import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Active } from './Active';
import { Investiment } from './Investment';

@Entity('accounts')
export class User {
  @PrimaryGeneratedColumn({ type: 'integer'})
    CodCliente: number;
  @Column({ type: 'varchar', length: 100})
    nome: string;
  @Column({ type: 'varchar', length: 150, unique: true})
    email: string;
  @Column({ type: 'varchar', length: 255})
    password: string;
  @Column({ type: 'decimal', default: 0 })
    Valor: number;
  
  @OneToMany(() => Active, (active) => active.user)
    active: Active[];

  @OneToMany(() => Investiment, (investment) => investment.user)
    investment: Investiment[];

}