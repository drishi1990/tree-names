import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    section: {
      padding-bottom: 20px,
      [breakpoints.up('md')]: {
        padding-top: spacing(5),
        padding-bottom: spacing(5),
      },
    },
  })
);
