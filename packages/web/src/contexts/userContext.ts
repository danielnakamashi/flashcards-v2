import { createContext, useContext } from 'react';
import { User } from '@flashcards/core';

export type IUserContext = {
  user: User;
  logout: () => void;
};

const userContext = createContext<IUserContext>({} as IUserContext);
const UserProvider = userContext.Provider;
const useUserContext = (): IUserContext => useContext(userContext);

export { UserProvider, useUserContext };
