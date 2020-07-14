import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.10px,
      margin: theme.10px,
      text-align: 'left',
      color: theme.palette.text.secondary,
    },
  })
);
