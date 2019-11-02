import React, { useEffect, useState, createContext } from 'react';
import { User, UserContext, UserProviderProps } from 'types/user-context';
import firebase from '../../firebase';

const userContext = createContext<UserContext>({
  user: null,
  signOut: () => {},
});

const { Provider } = userContext;

const FirebaseUserProvider: React.FC<UserProviderProps> = ({ children, loading }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userConfirmed, setUserConfirmed] = useState<boolean>(false);
  const context = {
    user,
    signOut: () => firebase.auth().signOut(),
  };

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(user => {
      setUserConfirmed(true);
      setUser(user);
    });
  });

  if (!userConfirmed) {
    return loading !== undefined ? loading : null;
  }

  return <Provider value={context}>{children}</Provider>;
};

const useFirebaseUserContext = (): UserContext => React.useContext(userContext);

export { FirebaseUserProvider as UserProvider, useFirebaseUserContext as useUserContext };
