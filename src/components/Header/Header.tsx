import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import { UserContext } from '../../containers/Authentication';
import { useAppContext } from '../../containers/AppContext';
import { UserContext } from 'types/user-context';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    userName: {
      flexGrow: 1,
    },
  }),
);

const Header: React.FC = () => {
  const appContext = useAppContext();
  const { user, signOut } = appContext.useUser();
  const styles = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        {user && (
          <>
            <IconButton>
              <Avatar src={user.photoURL || undefined} alt={user.displayName || undefined}></Avatar>
            </IconButton>
            <Typography className={styles.userName}>{user.displayName}</Typography>
            <Button variant="contained" onClick={signOut}>
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
