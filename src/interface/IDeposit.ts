export interface ICodCliente {
  CodCliente: number,
}

export interface IAccountChange extends ICodCliente{
  Valor: number,
}

interface IAccount extends ICodCliente{
  Saldo: number,
}

export default IAccount;
