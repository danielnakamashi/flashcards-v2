import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    addTopicButton: {
      whiteSpace: 'nowrap',
    },
  }),
);

export { useStyles };
