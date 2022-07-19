import IToken from '../interface/IToken';
import IUser from '../interface/IUser';
import UserRepository from '../repository/userRepository';
import { generateJWTToken } from '../shared/JWT';


const createdUser = async (user: IUser): Promise<IToken> => {
  const newUser = UserRepository.create(user);
  await UserRepository.save(newUser);
  let token = '';  
  if (newUser.id) {
    token = generateJWTToken(JSON.stringify(user));
  }
  return { token };
};

export default { createdUser };