import { IAccountChange } from '../interface/IDeposit';
import IToken from '../interface/IToken';
import IUser from '../interface/IUser';
import UserRepository from '../repository/userRepository';
import HttpException from '../shared/HttpExceptionError';
import { generateJWTToken } from '../shared/JWT';
import StatusCodes from '../utils/StatusCodes';

const createdUser = async (user: IUser): Promise<IToken> => {
  user.valor = 0;
  const newUser = UserRepository.create(user);
  await UserRepository.save(newUser);
  let token = '';  
  if (newUser.CodCliente) {
    token = generateJWTToken(JSON.stringify(user));
  }
  return { token };
};

const changeValue = async (conta: IAccountChange): Promise<IAccountChange> => {
  const { CodCliente, Valor } = conta;
  const rowns = await UserRepository.findOneBy({ CodCliente });  

  if (!rowns) {
    throw new HttpException(StatusCodes.NOT_FOUND, 'CodCliente not  found');
  }
  
  const newValue = +(rowns.Valor) + Valor;
  
  await UserRepository.update(CodCliente, {
    ...rowns,
    Valor: newValue
  });


  return {
    CodCliente,
    Valor: newValue
  };
};

export default { createdUser, changeValue };