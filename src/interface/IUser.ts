export interface IUserLogin {
  password: string,
  email: string,
}

interface IUser extends IUserLogin {
  id?: number,
  name: string,
  valor: number,
}

export default IUser;