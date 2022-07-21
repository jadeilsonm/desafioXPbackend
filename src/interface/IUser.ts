export interface IUserLogin {
  password: string,
  email: string,
}

interface IUser extends IUserLogin {
  id?: number,
  nome: string,
  valor?: number,
}

export default IUser;