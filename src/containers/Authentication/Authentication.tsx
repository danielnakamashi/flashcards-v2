import React, { useState, useEffect } from 'react';
import { UserInfo } from 'firebase';
import firebase from '../../firebase';

export interface AuthenticationProps {
  logged: React.ComponentType<{ user: UserInfo }>;
  unlogged: React.ComponentType;
  onAuthStateChanged?: Function;
}

export type AuthStateChange = (state: any) => void;

const Authentication: React.FC<AuthenticationProps> = ({
  logged: LoggedComponent,
  unlogged: UnloggedComponent,
  onAuthStateChanged = (setter: AuthStateChange) => {
    firebase.auth().onAuthStateChanged(setter);
  },
}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(setUser);
  }, [onAuthStateChanged]);

  if (user === null) {
    return <UnloggedComponent />;
  }

  return <LoggedComponent user={user!} />;
};

export default Authentication;
