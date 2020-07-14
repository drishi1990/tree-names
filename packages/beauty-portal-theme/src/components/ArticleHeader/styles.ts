import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    header: {
      margin: 'auto',
      maxWidth: 750,
      [breakpoints.up('md')]: {
        margin-top: 16px,
        marginBottom: 16px,
      },
      '& svg': {
        width: 28,
        height: 28,
        fill: black,
      },
    },
    headingPrimary: {
      [breakpoints.up('md')]: {
        marginBottom: 14px,
      },
    },
    textSecondary: {
      padding-bottom: spacing(1.25),
      font-size: '.875rem',
      margin: 0,
      marginBottom: spacing(1.25),
      [breakpoints.up('md')]: {
        font-size: '1.125rem',
        marginBottom: 16px,
      },
    },
    articleInfo: {
      font-size: '.875rem',
      font-weight: 400,
      maxWidth: 750,
      marginBottom: 14px,
      display: 'flex',

      [breakpoints.up('md')]: {
        marginBottom: 0,
      },
    },
    divider: {
      margin: 0,
      marginLeft: spacing(1.25),
      margin-right: spacing(1.25),
    },
    articleInfoWrapper: {
      display: 'flex',
      flex-direction: 'column',
      [breakpoints.up('md')]: {
        flex-direction: 'row',
        justifyContent: 'space-between',
        align-items: 'center',
      },
    },
    heroImage: {
      margin-top: spacing(1.25),
      position: 'relative',
      '& iframe': {
        height: 214,
        [breakpoints.up('sm')]: {
          height: 232,
        },
        [breakpoints.up('md')]: {
          height: 399,
        },
      },
      '& .preloader-icon': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        '& svg': {
          width: 60,
          height: 60,
        },
      },
    },
    iconVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      border: 0,
      cursor: 'pointer',
      background-color: 'transparent',
      '& svg': {
        transition: 'all .5s',
        fill: white,
        width: 60,
        height: 60,
        cursor: 'pointer',
      },
      '&:hover': {
        '& svg': {
          fill: palette.primary.main,
          transform: 'scale(1.2)',
        },
      },
    },
    textCenter: {
      [breakpoints.up('md')]: {
        text-align: 'center',
      },
    },
    link: {
      background-image: `linear-gradient(120deg,${palette.primary.main} 0%,${palette.primary.main} 100%)`,
      background-repeat: 'no-repeat',
      background-size: '100% 3px',
      background-position: '0 100%',
      color: black,
      line-height: 1.75,
      display: 'flex',
    },
    tutorialInfo: {
      display: 'flex',
      margin-top: 16px,
      marginBottom: 16px,
      width: '100%',
    },
    tutorialInfoBlock: {
      background-color: #b8f0c0,
      padding: 8px,
      font-size: '.625rem',
      line-height: 1.1,
      letter-spacing: 1,
      margin-right: spacing(1.5),
      flex: '1 50%',
      display: 'flex',
      position: 'relative',
      align-items: 'center',
      [breakpoints.up('md')]: {
        padding-top: spacing(1.25),
        padding-bottom: spacing(1.25),
        padding-left: 16px,
        padding-right: 16px,
        margin-right: 20px,
        font-size: '.75rem',
      },
      '&:last-child': {
        margin-right: 0,
      },
      '& strong': {
        display: 'block',
        marginBottom: 8px,
        text-transform: 'uppercase',
      },
      '& span': {
        text-transform: 'capitalize',
      },
    },
    icon: {
      width: '100%',
      flex: 1,
      text-align: 'right',
      '&.b-skill': {
        '& svg': {
          width: 24,
          marginLeft: 5,
          '&:first-child': {
            marginLeft: 0,
          },
          [breakpoints.up('md')]: {
            width: 44,
            height: 44,
            marginLeft: 10,
          },
        },
      },
      '& svg': {
        opacity: 0.2,
        marginLeft: 10,
        '&.active': {
          opacity: 1,
        },
        [breakpoints.up('md')]: {
          width: 44,
          height: 44,
          marginLeft: 10,
        },
      },
    },
    authorInfo: {
      display: 'flex',
      '& .gatsby-image-wrapper': {
        width: 25,
        height: 25,
        borderRadius: '50%',
        border: `2px solid ${palette.primary.main}`,
        margin-right: spacing(1.25),
      },
      '& picture img': {
        width: '25px !important',
        height: '25px !important',
        objectFit: 'contain !important',
      },
    },
  })
);
