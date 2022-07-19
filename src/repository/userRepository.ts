import { AppDataSource } from '../data-source';
import { User } from '../model/User';

const UserRepository = AppDataSource.getRepository(User);

export default UserRepository;