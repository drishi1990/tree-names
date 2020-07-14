import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    teaserWrapper: {
      [breakpoints.up('md')]: {
        maxWidth: 400,
      },
      '&.fixed': {
        position: 'fixed',
        top: 90,
      },
      '&.absolute': {
        position: 'absolute',
        bottom: 0,
      },
    },
    teaser: {
      marginBottom: 16px,
      text-align: 'left',
      color: palette.text.secondary,
      position: 'relative',
      '& figure': {
        margin-right: 14px,
      },
    },
    teaserFirst: {
      marginBottom: 24px,
      '& figure': {
        margin-right: 0,
        [breakpoints.up('md')]: {
          margin-right: 14px,
        },
      },
      '& a > div': {
        flex-direction: 'column',
      },
      '& h3': {
        font-size: '.875rem',
        font-weight: 600,
        line-height: 1.3,
        margin-top: 5px,
        [breakpoints.up('md')]: {
          font-size: '1.125rem',
        },
      },
      '& div > span': {
        position: 'absolute',
        top: 0,
        background-color: white,
        color: #2c5270,
        font-size: '.75rem',
        font-weight: 600,
        letter-spacing: 1,
        margin-top: 0,

        padding-top: 3px,
        padding-bottom: 3px,
        padding-left: 6px,
        padding-right: 6px,
        [breakpoints.up('md')]: {
          padding-top: 6px,
          padding-bottom: 6px,
        },
      },
    },
    teaserLast: {
      margin-top: 32px,
      [breakpoints.up('md')]: {
        margin-top: 48px,
      },
      '& figure': {
        margin-right: 14px,
      },
      '& .c-teaser__copy': {
        flex: '1',
        width: '100%',
      },
      '& h3': {
        font-weight: 600,
        maxWidth: '70%',
      },
    },
    scrollArea: {
      overflow: 'scroll',
      display: 'flex',
      flex-wrap: 'nowrap',
      [breakpoints.up('md')]: {
        display: 'block',
      },
      '& .c-teaser__item': {
        flex: '0 0 75%',
        margin-right: 10,
        [breakpoints.up('md')]: {
          display: 'static',
          margin-right: 0,
        },
      },
    },
    teaserCopy: {
      width: '100%',
      flex: 1,
    },
    teaserImage: {
      margin-right: 14px,
    },
    teaserLink: {
      font-size: '1rem',

      color: black,
      margin: 0,
      display: 'block',
      '&:hover h3': {
        '& span': {
          background-image: `linear-gradient(120deg,${#b8f0c0} 0%,${#b8f0c0} 100%)`,
          background-repeat: 'no-repeat',
          background-size: '100% .1875rem',
          background-position: '0 100%',
        },
      },
    },
    teaserType: {
      margin-top: 5px,
      marginBottom: 5px,
      display: 'block',
      text-transform: 'uppercase',
      color: #2c5270,
      font-size: '.625rem',
      font-weight: 600,
      line-height: 1.1,
      letter-spacing: 1,
      [breakpoints.up('md')]: {
        font-size: '.75rem',
      },
    },
    teaserTitle: {
      font-size: '.875rem',
      font-weight: 400,
      line-height: 1.1,
      margin: 0,
      [breakpoints.up('md')]: {
        font-size: '1.125rem',
        line-height: 1.3,
        margin-top: 8px,
      },
    },
    flexBox: {
      display: 'flex',
      align-items: 'stretch',
    },
    title: {
      font-size: '1.375rem',
      line-height: 1.1,
      font-weight: 600,
      margin: 0,
      marginBottom: 20px,
      padding-top: 8px,
      position: 'relative',
      '&:before': {
        content: '""',
        background: #b8f0c0,
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100vw',
        height: 20,
        z-index: -1,
      },
      [breakpoints.up('md')]: {
        font-size: '1.875rem',
        padding-top: 5px,
      },
    },
    picture: {
      position: 'relative',
      padding-top: `${(171 / 382) * 100}%`,
      [breakpoints.up('md')]: {
        padding-top: `${(206 / 400) * 100}%`,
      },
    },
    image: {
      position: 'absolute',
      width: '100%',
      height: 'auto',
      top: 0,
    },
  })
);
