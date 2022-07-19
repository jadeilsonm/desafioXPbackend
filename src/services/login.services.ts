import IToken from '../interface/IToken';
import IUser from '../interface/IUser';
import UserRepository from '../repository/userRepository';
import HttpException from '../shared/HttpExceptionError';
import { generateJWTToken } from '../shared/JWT';
import Messages from '../utils/Messages';


const loginUser = async (user: IUser): Promise<IToken> => {
  const returnUser = await UserRepository
    .findOne({ where: {password: user.password, email: user.email }});
 
  if (!returnUser) {
    throw new HttpException(401, Messages.DADOS_INVALID);
  }
  const token = generateJWTToken(JSON.stringify(user));
  
  return { token };
};

export default loginUser;