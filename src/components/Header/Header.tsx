import React from 'react';
import { UserContext } from '../../containers/Authentication';

const Header: React.FC = () => {
  const { user, signOut } = React.useContext(UserContext);

  return (
    <header>
      {user && (
        <div>
          <img src={user.photoURL || undefined} alt={user.displayName || undefined} />
          <span>{user.displayName}</span>
        </div>
      )}
      <button onClick={signOut}>Logout</button>
    </header>
  );
};

export default Header;
