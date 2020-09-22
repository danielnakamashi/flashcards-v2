import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      fontSize: theme.typography.fontSize * 2,
      fontWeight: 'bold',
    },
  }),
);

export { useStyles };
