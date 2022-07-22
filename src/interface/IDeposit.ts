export interface ICodCliente {
  codCliente: number,
}

export interface IAccountChange extends ICodCliente{
  valor: number,
}

interface IAccount extends ICodCliente{
  saldo: number,
}

export default IAccount;
