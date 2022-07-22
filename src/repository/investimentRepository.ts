import { AppDataSource } from '../data-source';
import { Investiment } from '../model/Investment';

const investimentRepository = AppDataSource.getRepository(Investiment);

export default investimentRepository;