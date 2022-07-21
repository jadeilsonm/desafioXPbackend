import { User } from '../model/User';

interface IActive {
  CodAtivo?: number,
  codCliente?: number,
  QtdeAtivo: number,
  Valor: number,
}

export interface INewActive {
  CodAtivo?: number,
  codCliente?: User,
  QtdeAtivo: number,
  Valor: number,
}

export default IActive;
