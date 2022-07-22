import { AppDataSource } from '../data-source';
import { Investiment } from '../model/Investment';

const activeRepository = AppDataSource.getRepository(Investiment);

export default activeRepository;