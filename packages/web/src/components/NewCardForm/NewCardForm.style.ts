import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonContainer: {
      height: '100%',
    },
  }),
);

export { useStyles };
