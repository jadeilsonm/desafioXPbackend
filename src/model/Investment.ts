import { Column, Entity,JoinColumn,ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Active } from './Active';
import { User } from './User';

@Entity('investiments')
export class Investiment {
  @PrimaryGeneratedColumn({ type: 'integer'})
    id: number;
  @Column({ type: 'integer' })
    qtdeAtivo: number;

  @ManyToOne(() => User, (user) => user.investment)
  @JoinColumn({ name: 'codCliente' })
    user: User;

  @OneToOne(() => Active, (active) => active.investment)
  @JoinColumn({ name: 'codAtivo' })
    active: Active;

}