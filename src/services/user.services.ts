import IAccount, { IAccountChange } from '../interface/IDeposit';
import IToken from '../interface/IToken';
import IUser from '../interface/IUser';
import UserRepository from '../repository/userRepository';
import HttpException from '../shared/HttpExceptionError';
import { generateJWTToken } from '../shared/JWT';
import Messages from '../utils/Messages';
import StatusCodes from '../utils/StatusCodes';

const createdUser = async (user: IUser): Promise<IToken> => {
  user.valor = 0;
  const newUser = UserRepository.create(user);
  await UserRepository.save(newUser);
  let token = '';  
  if (newUser.codCliente) {
    token = generateJWTToken(JSON.stringify(user));
  }
  return { token };
};

const changeValue = async (conta: IAccountChange, user: IUser, options = '+'): Promise<IAccountChange> => {
  const { codCliente, valor } = conta;

  const rowns = await UserRepository.findOneBy({ codCliente });  

  if (!rowns) {
    throw new HttpException(StatusCodes.NOT_FOUND, Messages.COD_NOT_FOUND);
  }

  if ( rowns.email !== user.email) {
    throw new HttpException(StatusCodes.UNAUTHORIZED, Messages.TOKEN_INVALID);
  }

  if (options === '-' && valor > rowns.valor) {
    throw new HttpException(StatusCodes.NOT_FOUND, Messages.VALUE_INVALID);
  }

  const newValue = eval(`${rowns.valor} ${options} ${valor}`).toFixed(2);

  await UserRepository.update(codCliente, {
    ...rowns,
    valor: newValue
  });
  
  return {
    codCliente,
    valor: newValue
  };
};

const getUser = async (codCliente: number, user: IUser): Promise<IAccount> => {
  const rowns = await UserRepository.findOneBy({ codCliente });
  if (!rowns) {
    throw new HttpException(StatusCodes.NOT_FOUND, Messages.COD_NOT_FOUND);
  }
  if ( rowns.email !== user.email) {
    throw new HttpException(StatusCodes.UNAUTHORIZED, Messages.IMPOSSIBLE_GET);
  }
  return {
    codCliente,
    saldo: rowns.valor
  };
};

const getAllUser = async () => {
  const rowns = await UserRepository.find();
  const res = rowns.map((user) => ({
    codCliente: user.codCliente,
    valor: user.valor,
    nome: user.nome,
  }));
  return res;
};


export default { createdUser, changeValue, getUser, getAllUser };