import IActive, { INewActive } from '../interface/IActive';
import activeRepository from '../repository/activeRepository';
import UserRepository from '../repository/userRepository';
import HttpException from '../shared/HttpExceptionError';
import Messages from '../utils/Messages';
import StatusCodes from '../utils/StatusCodes';

const createdActive = async (activo: IActive): Promise<INewActive> => {
  const { codCliente: CodCliente } = activo;
  const newActive = activeRepository.create(activo);
  const user = await UserRepository.findOneBy({ CodCliente });
  if (!user) {
    throw new HttpException(StatusCodes.NOT_FOUND, Messages.COD_NOT_FOUND);
  }
  newActive.user = user;
  await activeRepository.save(newActive);
  return newActive;
};

export default { createdActive };