import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    richText: {
      counterReset: 'step',
      padding-top: spacing(5),
      marginBottom: 32px,
      position: 'relative',
      '&:before': {
        content: '""',
        position: 'absolute',
        background: palette.tertiary.main,
        height: 20,
        right: 0,
        top: 0,
        width: '100vw',
        z-index: -1,
      },
      '& .c-image': {
        marginBottom: 16px,
        '&>div': {
          marginBottom: 0,
        },
        '&__credit': {
          font-size: '.75rem',
          color: palette.grey[100],
          margin-top: spacing(0.5),
        },
      },
      '& img': {
        display: 'block',
        height: 'auto',
        maxWidth: '100%',
      },
      '& h2': {
        font-size: '1.875rem',
        font-weight: 700,
        line-height: 1.1,
        margin-top: spacing(6.25),
        marginBottom: 20px,
        marginLeft: 0,
        margin-right: 20px,
        position: 'relative',
        background: white,
        padding: 16px,
        padding-bottom: 0,
        [breakpoints.up('md')]: {
          font-size: '2.25rem',
        },

        '&:before': {
          content: '""',
          position: 'absolute',
          background: black,
          right: -20,
          top: -20,
          width: '100vw',
          z-index: -1,
          background-color: palette.tertiary.main,
          height: 'calc(100% - .15em)',
        },
      },
      '& h3': {
        font-size: '1.5rem',
        font-weight: 600,
        margin-top: 0,
        marginBottom: 8px,
        [breakpoints.up('md')]: {
          font-size: '1.875rem',
        },
      },
      '& p': {
        font-size: '.875rem',
        margin-top: 0,
        marginBottom: 16px,
        [breakpoints.up('md')]: {
          font-size: '1.125rem',
        },
      },
      '& div': {
        margin-top: 0,
        marginBottom: 16px,
      },
      '& figure': {
        margin: 0,
      },
      '& a': {
        color: black,
        position: 'relative',

        display: 'inline-block',
        '&:before': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 2,
          background-color: palette.primary.main,
          transition: 'all 0.3s ease-in-out',
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: '100%',
          bottom: 0,
          height: 2,
          background-color: black,
          transition: 'all 0.3s ease-in-out',
        },
        '&:hover:after': {
          right: 0,
        },
      },
      '& .c-step': {
        position: 'relative',
        padding-left: 40,
        margin-top: spacing(5),
        [breakpoints.up('md')]: {
          padding-left: 100,
        },
        '&:before': {
          position: 'absolute',
          top: 0,
          left: 0,
          counterIncrement: 'step',
          content: `${'counter(step)'}`,
          font-size: '3.125rem',
          font-weight: 600,
          line-height: 1,
          margin-top: spacing(-0.625),
          color: palette.tertiary.main,
          fontFamily: 'Proxima Nova Alt',
          [breakpoints.up('md')]: {
            font-size: '6.25rem',
          },
        },
      },
      '& .c-step__reset': {
        counterReset: 'step',
        position: 'relative',
        padding-left: 40,
        margin-top: spacing(5),
        [breakpoints.up('md')]: {
          padding-left: 100,
        },
        '&:before': {
          position: 'absolute',
          top: 0,
          left: 0,
          counterIncrement: 'step',
          content: `${'counter(step)'}`,
          font-size: '3.125rem',
          font-weight: 600,
          line-height: 1,
          margin-top: spacing(-0.625),
          color: palette.tertiary.main,
          fontFamily: 'Proxima Nova Alt',
          [breakpoints.up('md')]: {
            font-size: '6.25rem',
          },
        },
      },
    },
  })
);
