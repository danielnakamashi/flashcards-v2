import React, { useEffect, useCallback } from 'react';
import { useStore } from 'effector-react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { userStore, userController } from '../../instances';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    userName: {
      flexGrow: 1,
    },
  }),
);

const Header: React.FC = () => {
  const user = useStore(userStore);
  const styles = useStyles();
  const logout = useCallback(() => userController.logout(), []);

  useEffect(() => {
    userController.getUser();
  }, []);

  return (
    <AppBar position="static">
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
