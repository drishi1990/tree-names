import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ palette }: Theme) =>
  createStyles({
    section: {
      background-color: #b8f0c0,
      '&.stacker': {
        background-color: palette.quaternary.main,
      },
    },
  })
);
