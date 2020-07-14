import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    section: {
      padding-bottom: 16px,
      padding-top: 16px,
      background-color: palette.quaternary.main,
      [breakpoints.up('md')]: {
        padding-bottom: spacing(5),
        padding-top: spacing(5),
      },
      '& h1': {
        font-size: '1.875rem',
        font-weight: 600,
        line-height: 1.1,
        margin-top: 0,
        marginBottom: 10,
        [breakpoints.up('md')]: {
          font-size: '2.875rem',
        },
      },
      '&.textblocktypea': {
        background-color: white,
        '& p': {
          width: '80%',
          margin: 'auto',
        },
      },
    },
    sectionDescription: {
      text-align: 'center',
      margin: 'auto',
      color: palette.grey[50],
      '& p': {
        font-size: '.875rem',
        margin: 0,
        [breakpoints.up('md')]: {
          font-size: '1.125rem',
        },
      },
      '& h1, & h2, & h3, & h4, & h5, & h6': {
        color: black,
      },
      '& h2': {
        font-size: '1.5rem',
      },
      '& blockquote': {
        position: 'relative',
        padding-top: 40,
        width: '80%',
        margin: 'auto',
        '& p': {
          fontStyle: 'italic',
          font-size: '1.75rem',
          position: 'relative',
          font-weight: 400,
          z-index: 1,
          '& span': {
            '&:last-child': {
              font-size: '1rem',
              color: black,
            },
          },
        },
        '&:before': {
          position: 'absolute',
          top: -10,
          left: '50%',
          content: '""',
          background-image: props => `url(${props.icon})`,
          background-repeat: 'no-repeat',
          background-size: '30px 30px',
          background-position: 'center center',
          background-color: palette.quaternary.main,
          height: 40,
          width: 40,
          transform: 'translateX(-50%)',
          z-index: 1,
        },
        '&:after': {
          position: 'absolute',
          content: '""',
          top: 8,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 200,
          height: 2,
          background-color: palette.primary.main,
          z-index: 0,
        },
      },
    },
  })
);
