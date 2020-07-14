import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ spacing, breakpoints, palette }: Theme) =>
  createStyles({
    wrapper: {
      '& a': {
        color: black,
        background-image: `linear-gradient(120deg,${#b8f0c0} 0%,${#b8f0c0} 100%)`,
        background-repeat: 'no-repeat',
        background-size: '100% .1875rem',
        background-position: '0 100%',

        display: 'inline-block',
        transition: 'all .3s ease-out',
        '&:hover': {
          background-image: `linear-gradient(120deg,${palette.primary.main} 0%,${palette.primary.main} 100%)`,
        },
      },
    },
    banner: {
      background-color: #b8f0c0,
    },
    container: {
      margin: 'auto',
      maxWidth: 700,
      position: 'relative',
    },
    heading: {
      maxWidth: 660,
      background-color: white,
      padding: 24px,
      margin-top: spacing(-3),
      position: 'relative',
      '& h1': {
        margin: 0,
        line-height: 1.1,
      },
    },
    imageWrapper: {},
    pageTitle: {
      margin-top: 0,
      marginBottom: spacing(1.5),
      font-size: '2rem',
      font-weight: 400,
      text-align: 'center',
      [breakpoints.up('md')]: {
        font-size: '3rem',
      },
    },
    pageDescription: {
      font-size: '.875rem',
      font-weight: 400,
      text-align: 'center',
      [breakpoints.up('md')]: {
        font-size: '1.125rem',
      },
    },
    button: {
      font-size: '1.125rem',
      font-weight: 700,
      width: 160,
      height: 50,
      cursor: 'pointer',
      background-color: palette.primary.main,
      border: `1px solid ${palette.primary.main}`,
      color: black,
      position: 'relative',
      transition: 'all .3s ease-out',
      margin-top: 24px,

      '&:hover': {
        borderColor: black,
        background-color: black,
        color: white,
      },
    },
    thankyou: {
      text-align: 'center',
      position: 'absolute',
      left: 20,
      right: 20,
      maxWidth: 660,
      background-color: white,
      padding: 16px,
      bottom: '100%',
      '& h2': {
        font-size: '2rem',
        font-weight: 400,
        text-align: 'center',
        margin: 0,
        [breakpoints.up('md')]: {
          font-size: '3rem',
        },
      },
      '& svg': {
        animation: '$jiggle ease-in-out 400ms infinite',
      },
    },
    '@keyframes jiggle': {
      '0%': {
        transform: 'none',
      },
      '25%': {
        transform: 'rotateZ(5deg)',
      },

      '75%': {
        transform: 'rotateZ(-5deg)',
      },
      '100%': {
        transform: 'none',
      },
    },
  })
);
