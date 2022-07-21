import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Investiment } from './Investment';
import { User } from './User';

@Entity('actives')
export class Active {
  @PrimaryGeneratedColumn({ type: 'integer'})
    CodAtivo: number;

  @Column({ type: 'integer' })
    QtdeAtivo: number;

  @Column({ type: 'decimal' })
    Valor: number;

  @Column({ type: 'varchar', unique: true })
    name: string;

  @ManyToOne(() => User, (user) => user.active)
  @JoinColumn({name: 'codCliente'})
    user: User;
  
  @OneToOne(() => Investiment, (investment) => investment.active )
    investment: Investiment;

}