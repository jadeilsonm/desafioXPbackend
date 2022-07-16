import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('actives')
export class Active {
  @PrimaryGeneratedColumn()
    CodAtivo: number;
  @Column({ type: 'integer' })
    QtdeAtivo: number;
  @Column({ type: 'decimal' })
    Valor: number;
}