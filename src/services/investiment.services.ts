import IChange from '../interface/IChange';
import activeRepository from '../repository/activeRepository';
import investimentRepository from '../repository/investimentRepository';
import UserRepository from '../repository/userRepository';
import HttpException from '../shared/HttpExceptionError';
import Messages from '../utils/Messages';
import StatusCodes from '../utils/StatusCodes';

const comprar = async (compra: IChange): Promise<boolean> => {
  let { codCliente } = compra;
  const { codAtivo, qtdeAtivo } = compra;
  const user = await UserRepository.findOneBy({ codCliente });

  if (!user) {
    throw new HttpException(StatusCodes.NOT_FOUND, Messages.COD_NOT_FOUND);
  }

  const [active] = await activeRepository.find({ relations:{ user: true }, where: { codAtivo }});
    
  if (!active) {
    throw new HttpException(StatusCodes.NOT_FOUND, Messages.ACTIVE_NOT_FOUND);
  }

  const valueActive = qtdeAtivo * active.valor;

  if (valueActive > user.valor) {
    throw new HttpException(StatusCodes.UNAUTHORIZED,Messages.INVALID_BALENCE);
  }

  if (qtdeAtivo > active.qtdeAtivo) {
    throw new HttpException(StatusCodes.UNAUTHORIZED, Messages.INVALID_AMOUNT);
  }

  const newInvestiment = {
    qtdeAtivo,
    codCliente: user,
    codAtivo: active
  };

  const invest = await investimentRepository.create(newInvestiment);
   
  await investimentRepository.save(invest);

  await activeRepository.update(codAtivo, {
    ...active,
    qtdeAtivo: active.qtdeAtivo - qtdeAtivo
  });
  
  await UserRepository.update(codCliente, {
    ...user,
    valor: user.valor - valueActive
  });

  codCliente = active.user.codCliente;

  const vendedor = active.user;

  await UserRepository.update(codCliente,{
    ...vendedor,
    valor: vendedor.valor + valueActive
  });

  return true; 
};


const vender = async (vender: IChange): Promise<boolean> => {
  const { codCliente, codAtivo, qtdeAtivo } = vender;
  const user = await UserRepository.findOneBy({ codCliente });
  if (!user) {
    throw new HttpException(StatusCodes.NOT_FOUND, Messages.COD_NOT_FOUND);
  }
  const [active] = await activeRepository.find({ relations: {
    user: true
  }, where: {
    codAtivo
  }});
  
  if (!active) {
    throw new HttpException(StatusCodes.NOT_FOUND, Messages.ACTIVE_NOT_FOUND);
  }

  if (qtdeAtivo > active.qtdeAtivo) {
    throw new HttpException(StatusCodes.UNAUTHORIZED, Messages.INVALID_AMOUNT);
  }

  const newInvestiment = {
    qtdeAtivo,
    codCliente: user,
    codAtivo: active
  };

  const invest = await investimentRepository.create(newInvestiment);

  const valueActive = qtdeAtivo * active.valor;
   
  await investimentRepository.save(invest);

  await UserRepository.update(codCliente, {
    ...user,
    valor: user.valor + valueActive
  });

  await activeRepository.update(codAtivo, {
    ...active,
    qtdeAtivo: active.qtdeAtivo - qtdeAtivo,
    user: {
      ...user,
      valor: user.valor + valueActive
    },
  });


  return true; 
};

export default { comprar, vender };