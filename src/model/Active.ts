import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Investiment } from './Investment';
import { User } from './User';

@Entity('actives')
export class Active {
  @PrimaryGeneratedColumn({ type: 'integer'})
    codAtivo: number;

  @Column({ type: 'integer' })
    qtdeAtivo: number;

  @Column({ type: 'decimal' })
    valor: number;

  @Column({ type: 'varchar'})
    name: string;

  @ManyToOne(() => User, (user) => user.active)
  @JoinColumn({name: 'codCliente'})
    user: User;
  
  @OneToOne(() => Investiment, (investment) => investment.active )
    investment: Investiment;

}