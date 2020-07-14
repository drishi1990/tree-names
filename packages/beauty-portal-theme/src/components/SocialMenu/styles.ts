import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    social: {
      [breakpoints.up('md')]: {
        alignSelf: 'center',
      },

      '& ul': {
        listStyleType: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
      },

      '& li': {
        margin-right: 20px,
        '&:last-child': {
          margin-right: 0,
        },
      },

      '& a:hover svg': {
        fill: palette.primary.main,
      },

      '& svg': {
        width: 32,
        height: 32,
        fill: white,
        transition: 'all .3s',
      },
    },
  })
);
