import { IGetUser } from './IGetUser';
import { ILogin } from './ILogin';
import { ILogout } from './ILogout';

export type IUserService = IGetUser & ILogin & ILogout;
