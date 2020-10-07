import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { User } from '@flashcards/core';
import { routes } from '../../routes';

const useStyles = makeStyles({
  userName: {
    flexGrow: 1,
  },
  title: {
    textDecoration: 'none',
    color: 'white',
  },
});
const Header: React.FC<{ user: User; logout: () => void }> = ({ user, logout }) => {
  const styles = useStyles();
  const profileRef = React.useRef<HTMLDivElement>();
  const [isPopoverShown, setIsPopoverShown] = React.useState<boolean>(false);

  return (
    <AppBar position="static" data-testid="header">
      <Toolbar>
        <Typography component={Link} to={routes.home()} className={styles.title}>
          Flashcards
        </Typography>
        <Box flexGrow={1} />
        {user && (
          <>
            <Box
              display="flex"
              alignItems="center"
              /* @ts-ignore */
              ref={profileRef}
              onClick={() => {
                setIsPopoverShown(true);
              }}
            >
              <IconButton>
                <Avatar
                  src={user.photoURL || undefined}
                  alt={user.displayName || undefined}
                  data-testid="avatar"
                ></Avatar>
              </IconButton>
              <Typography className={styles.userName}>{user.displayName}</Typography>
            </Box>
            <Popover
              open={isPopoverShown}
              anchorEl={profileRef.current}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
              <ClickAwayListener
                onClickAway={() => {
                  setIsPopoverShown(false);
                }}
              >
                <MenuList>
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Popover>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
