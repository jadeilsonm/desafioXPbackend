import IActive, { INewActive } from '../interface/IActive';
import activeRepository from '../repository/activeRepository';
import UserRepository from '../repository/userRepository';
import HttpException from '../shared/HttpExceptionError';
import Messages from '../utils/Messages';
import StatusCodes from '../utils/StatusCodes';

const createdActive = async (activo: IActive): Promise<INewActive> => {
  const { codCliente } = activo;
  const newActive = activeRepository.create(activo);
  const user = await UserRepository.findOneBy({ codCliente });
  if (!user) {
    throw new HttpException(StatusCodes.NOT_FOUND, Messages.NOT_FOUND);
  }
  newActive.user = user;
  await activeRepository.save(newActive);
  return newActive;
};

const getActive = async (cod: number): Promise<IActive[]> => {
  const rowns = await activeRepository.find({ relations: { user: true }});
  const res = rowns.filter(e => e.user.codCliente == cod).map((a) => ({
    codAtivo: a.codAtivo,
    qtdeAtivo: a.qtdeAtivo,
    valor: a.valor,
    codCliente: cod}));
  if (!res.length) {
    throw new HttpException(StatusCodes.NOT_FOUND, Messages.NOT_FOUND);
  }
  return res as IActive[];
};

const getAllActive = async (): Promise<IActive[]> => {
  const rowns = await activeRepository.find({ relations: {
    user: true
  }});
  return rowns as IActive[];
};

const FindByActive = async (codAtivo: number) => {
  const rowns = await activeRepository.findOneBy({ codAtivo });
  if (!rowns) {
    throw new HttpException(StatusCodes.NOT_FOUND, Messages.ACTIVE_NOT_FOUND);
  }
  return rowns;
};

export default { createdActive, getAllActive, getActive, FindByActive };