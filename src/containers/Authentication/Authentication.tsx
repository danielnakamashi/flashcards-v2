import React, { useState, useEffect } from 'react';
import { UserInfo } from 'firebase';

export interface AuthenticationProps {
  children: React.ReactElement;
  onAuthStateChanged: (setter: AuthStateChange) => void;
  signOut: () => void;
}

export type AuthStateChange = (state: any) => void;

export interface AuthenticationContext {
  user: UserInfo | null;
  signOut: () => void;
}

export const UserContext = React.createContext<AuthenticationContext>({
  user: null,
  signOut: () => {},
});

const Authentication: React.FC<AuthenticationProps> = ({ children, onAuthStateChanged, signOut }) => {
  const [user, setUser] = useState(null);
  const context = {
    user,
    signOut,
  };

  useEffect(() => {
    return onAuthStateChanged(setUser);
  }, [onAuthStateChanged]);

  return <UserContext.Provider value={context}>{children}</UserContext.Provider>;
};

export default Authentication;
