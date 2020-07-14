import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    readNext: {
      margin-top: spacing(3.75),
    },
    readNextTitle: {
      position: 'relative',
      font-size: '.875rem',
      font-weight: 600,
      line-height: 1.1,
      margin: 0,

      [breakpoints.up('md')]: {
        font-size: '1.125rem',
      },

      '&:before': {
        content: '""',
        height: 10,
        width: 80,
        position: 'absolute',
        z-index: -1,
        bottom: 0,
        left: '-.625rem',
        background: #b8f0c0,
      },
    },
    readNextContent: {
      margin-top: 16px,
      position: 'relative',
      '&:before': {
        content: '""',
        background: #b8f0c0,
        position: 'absolute',
        height: '100%',
        right: 0,
        top: 0,
        width: '100vw',
        z-index: -1,
      },
      [breakpoints.up('md')]: {
        maxHeight: 212,
      },
    },
    readNextImage: {
      overflow: 'hidden',
      '& .gatsby-image-wrapper': {
        [breakpoints.up('md')]: {
          maxWidth: 350,
        },
      },
    },
    readNextLink: {
      color: black,
      display: 'block',

      font-size: '1.875rem',
      font-weight: 600,
      padding-top: spacing(1.25),
      padding-right: spacing(1.25),
      [breakpoints.up('md')]: {
        padding: 0,
      },
      '&:hover': {
        '& h3 span': {
          background-image: `linear-gradient(120deg,${#b8f0c0} 0%,${#b8f0c0} 100%)`,
          background-repeat: 'no-repeat',
          background-size: '100% .1875rem',
          background-position: '0 100%',
        },
      },
    },
    readNextCopy: {
      background-color: white,
      padding-top: spacing(1.25),
      padding-bottom: spacing(1.25),
      padding-left: 20px,
      padding-right: 20px,
      [breakpoints.up('md')]: {
        position: 'absolute',
        maxWidth: 350,
        right: 20,
        top: '50%',
        transform: 'translateY(-50%)',
      },
    },
    readNextCopyTitle: {
      font-size: '1.25rem',
      font-weight: 600,
      line-height: 1.2,
      margin: 0,
      [breakpoints.up('md')]: {
        font-size: '1.875rem',
      },
    },
    readNextCopyType: {
      font-size: '.75rem',
      font-weight: 600,
      margin: 0,
      marginBottom: 8px,
      margin-right: 8px,
      text-transform: 'uppercase',
      color: #2c5270,
      display: 'block',
    },
  })
);
