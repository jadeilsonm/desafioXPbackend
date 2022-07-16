import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('investiments')
export class Investiment {
  @PrimaryGeneratedColumn()
    CodAtivo: number;
  @Column({ type: 'integer' })
    QtdeAtivo: number;
  @Column({ type: 'integer'})
    CodCliente: number;
}