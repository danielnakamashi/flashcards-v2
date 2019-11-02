import React from 'react';
import { UserContext } from '../../types/user-context';

interface AppContext {
  useUser: () => UserContext;
}

export interface AppProviderProps extends AppContext {
  children: React.ReactNode;
}

const appContext = React.createContext<AppContext>({
  useUser: () => ({
    user: null,
    signOut: () => {},
  }),
});
const { Provider } = appContext;

const AppProvider: React.FC<AppProviderProps> = ({ children, useUser }) => {
  return <Provider value={{ useUser }}>{children}</Provider>;
};

const useAppContext = (): AppContext => React.useContext(appContext);

export { AppProvider, useAppContext };
