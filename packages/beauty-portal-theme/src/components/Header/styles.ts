import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      z-index: 3,
      height: '60px',
      display: 'flex',
      align-items: 'center',
      borderBottom: `1px solid ${palette.primary.main}`,
      background-color: black,
    },
    headerContentWrapper: {
      display: 'flex',
      align-items: 'center',
      justifyContent: 'space-between',
      [breakpoints.up('md')]: {
        justifyContent: 'flex-start',
      },
    },
    logo: {
      [breakpoints.up('md')]: {
        margin: 0,
        margin-right: spacing(3.75),
        marginBottom: spacing(-0.25),
      },
    },
    logoLink: {
      display: 'flex',
      align-items: 'center',
      font-size: '1.6rem',
      font-weight: 500,
      color: palette.primary.main,
      '& span': {
        color: #b8f0c0,
      },
    },
    follow: {
      position: 'absolute',
      right: 120,
      [breakpoints.up('md')]: {
        right: 80,
      },
      '& svg': {
        fill: white,
      },
      '&:focus-within button': {
        background-color: palette.primary.main,
      },
    },
    followButton: {
      background-color: 'transparent',
      border: 'none',
      cursor: 'pointer',
      height: 60,
      width: 60,
      display: 'flex',
      align-items: 'center',
      justifyContent: 'center',
      position: 'relative',
      '&:hover': {
        background-color: palette.primary.main,
      },
      '&:hover > div, &:focus > div': {
        height: 'auto',
      },
    },
    followPopup: {
      position: 'fixed',
      top: 60,
      right: 0,
      background-color: white,
      width: '100vw',
      boxShadow: '0 0 10px 4px rgba(0,0,0,.1)',
      height: 0,
      transition: 'height 0.3s ease-in-out',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      flex-direction: 'column',
      [breakpoints.up('md')]: {
        position: 'absolute',
        minWidth: 340,
        right: -20,
        width: 340,
        '&:focus-within': {
          height: 'auto',
        },
      },
      '&:before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        left: 0,
        top: 0,
        height: 4,
        background-color: palette.primary.main,
      },
      '& .c-social': {
        '& ul': {
          justifyContent: 'center',
        },
        '& svg': {
          fill: black,
        },
      },
    },
    newsletter: {
      margin-top: 20px,
    },
    newsletterSubscribeButton: {
      font-size: '.875rem',
      font-weight: 700,
      background-color: palette.primary.main,
      color: black,
      padding-top: spacing(1.25),
      padding-bottom: spacing(1.25),
      padding-left: 16px,
      padding-right: 16px,
      display: 'block',
      position: 'relative',
      text-align: 'center',
      transform: 'perspective(1px) translateZ(0)',
      '&:before': {
        content: '""',
        position: 'absolute',
        z-index: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: black,
        transform: 'scaleX(0)',
        transformOrigin: '0 50%',
        transitionProperty: 'transform',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-out',
      },
      '&:hover': {
        color: white,
        '&:before': {
          transform: 'scaleX(1)',
        },
      },
      [breakpoints.up('md')]: {
        font-size: '1.125rem',
        padding-top: spacing(1.75),
        padding-bottom: spacing(1.75),
        padding-left: 20px,
        padding-right: 20px,
      },
    },
    siteSearch: {
      position: 'absolute',
      right: 60,
      [breakpoints.up('md')]: {
        right: 20,
      },
      '& svg': {
        fill: white,
      },
    },
    searchButton: {
      background-color: 'transparent',
      border: 'none',
      cursor: 'pointer',
      height: 60,
      width: 60,
      display: 'flex',
      align-items: 'center',
      justifyContent: 'center',
      '&:hover': {
        background-color: palette.primary.main,
      },
    },
  })
);
