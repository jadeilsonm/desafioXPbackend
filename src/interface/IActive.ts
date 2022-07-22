import { User } from '../model/User';

interface Active {
  CodAtivo?: number,
  QtdeAtivo: number,
  Valor: number,
}

interface IActive extends Active {
  codCliente?: number,
}

export interface INewActive extends Active {
  codCliente?: User,
}

export default IActive;
