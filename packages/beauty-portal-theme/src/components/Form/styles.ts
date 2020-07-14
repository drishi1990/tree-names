import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ spacing }: Theme) =>
  createStyles({
    formWrapper: {
      margin: 16px,
      margin-bottom: 48px,
    },
  })
);
