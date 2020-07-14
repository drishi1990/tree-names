import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    mainContentWrapper: {
      margin-top: spacing(7.5),
      overflow: 'hidden',
      '&.home-page': {
        padding-top: 0,
      },
    },
    mode: {
      position: 'fixed',
      top: 10,
      left: 20,
      z-index: 3,
      display: 'none',
      '& .MuiSwitch-track': {
        background-color: white,
      },
      '& .MuiFormControlLabel-label': {
        display: 'none',
      },
      [breakpoints.up('lg')]: {
        display: 'block',
      },
    },
    skipLink: {
      position: 'absolute',
      padding: spacing(0.5),
      z-index: 4,
      color: black,
      background: white,
      border: `.0625rem solid ${black}`,
      whiteSpace: 'nowrap',
      '&:not(:focus)': {
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        border: 0,
        pointerEvents: 'none',
      },
    },
  })
);
