import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('investiments')
export class Investiment {
  @PrimaryGeneratedColumn({ type: 'integer'})
    CodAtivo: number;
  @Column({ type: 'integer' })
    QtdeAtivo: number;
  @Column({ type: 'integer'})
    CodCliente: number;
}