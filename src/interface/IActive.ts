import { User } from '../model/User';

interface Active {
  codAtivo?: number,
  qtdeAtivo: number,
  valor: number,
}

interface IActive extends Active {
  codCliente?: number,
}

export interface INewActive extends Active {
  codCliente?: User,
}

export default IActive;
