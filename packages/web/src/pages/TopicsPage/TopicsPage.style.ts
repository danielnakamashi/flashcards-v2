import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(3),
    },
    gridList: {
      marginTop: theme.spacing(3),
    },
  }),
);

export { useStyles };
