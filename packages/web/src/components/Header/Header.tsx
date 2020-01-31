import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { User } from '@flashcards/core';

const useStyles = makeStyles({
  userName: {
    flexGrow: 1,
  },
});
const Header: React.FC<{ user: User; logout: () => void }> = ({ user, logout }) => {
  const styles = useStyles();

  return (
    <AppBar position="static" data-testid="header">
      <Toolbar>
        {user && (
          <>
            <IconButton>
              <Avatar src={user.photoURL || undefined} alt={user.displayName || undefined}></Avatar>
            </IconButton>
            <Typography className={styles.userName}>{user.displayName}</Typography>
            <Button variant="contained" onClick={logout}>
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
