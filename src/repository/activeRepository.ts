import { AppDataSource } from '../data-source';
import { Active } from '../model/Active';

const activeRepository = AppDataSource.getRepository(Active);

export default activeRepository;