import IToken from '../interface/IToken';
import IUser from '../interface/IUser';
import UserRepository from '../repository/userRepository';
import { generateJWTToken } from '../shared/JWT';

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

export default { createdUser };