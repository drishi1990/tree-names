import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    footer: {
      background: black,
      transition: 'color 0.25s ease-out 0s',
      font-size: '.775rem',
      display: 'flex',
      justifyContent: 'center',
      flex-direction: 'column',
      padding-top: 48px,
      '& .c-social': {
        marginLeft: 20px,
        margin-right: 20px,
      },
    },
    wrapper: {
      padding-left: 20px,
      padding-right: 20px,
    },
    navigationItems: {
      listStyleType: 'none',
      columns: 2,
      padding-left: 0,
      padding-bottom: 16px,
      margin-top: spacing(3.75),
      [breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        padding-bottom: 48px,
      },
    },
    navigationItem: {
      marginBottom: spacing(1.25),
      [breakpoints.up('md')]: {
        marginBottom: 0,
        marginLeft: 20px,
        margin-right: 20px,
      },
    },
    navigationLink: {
      color: white,
      display: 'flex',
      align-items: 'center',
      font-size: '.875rem',
      font-weight: 700,
      line-height: 1.6,
      [breakpoints.up('md')]: {
        font-size: '1.125rem',
      },
      '& svg': {
        marginLeft: spacing(0.5),
        fill: #b8f0c0,
      },
    },
    footerSecondary: {
      text-align: 'center',
      background-color: palette.grey[50],
      display: 'flex',
      align-items: 'center',
      justifyContent: 'center',
      padding: 24px,
      padding-bottom: 24px,
      [breakpoints.up('md')]: {
        padding-top: 32px,
        padding-bottom: spacing(5),
      },
      '& p': {
        color: white,
      },
      '& img': {
        margin-right: spacing(1.25),
        opacity: 0.5,
      },
    },
  })
);
