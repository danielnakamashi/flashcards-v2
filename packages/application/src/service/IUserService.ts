import { IGetUserService } from './IGetUserService';
import { ILoginService } from './ILoginService';
import { ILogoutService } from './ILogoutService';

export type IUserService = IGetUserService & ILoginService & ILogoutService;
