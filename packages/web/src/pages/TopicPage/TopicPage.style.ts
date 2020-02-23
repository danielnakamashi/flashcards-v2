import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: theme.typography.fontSize * 2,
      fontWeight: 'bold',
    },
    list: {
      padding: theme.spacing(3),
    },
  }),
);

export { useStyles };
