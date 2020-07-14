import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    section: {
      background-color: palette.tertiary.main,
      padding-top: 0,
      '&.imageblocktypeb': {
        '& .c-image_wrapper': {
          [breakpoints.up('md')]: {
            order: 1,
          },
        },
        '& .c-image_text': {
          right: 10,
        },
      },
    },
    sectionTitle: {
      color: black,
      margin-top: spacing(1.25),
      marginBottom: 5px,
      line-height: 1.2,
      '& span': {
        transition: '.15s',
        display: 'inline',
        background-image: `linear-gradient(120deg,rgba(184,240,192,0) 0%,rgba(184,240,192,0) 100%)`,
        background-repeat: 'no-repeat',
        background-size: '100% .1875rem',
        background-position: '0 100%',
      },
      [breakpoints.up('md')]: {
        marginBottom: 20px,
      },
    },
    link: {
      display: 'block',
      '&:hover': {
        '& h2 span': {
          background-image: `linear-gradient(120deg,${#b8f0c0} 0%,${#b8f0c0} 100%)`,
          background-repeat: 'no-repeat',
          background-size: '100% .1875rem',
          background-position: '0 100%',
        },
        '& img': {
          transform: 'scale(1.1)',
        },
      },
    },
    content: {
      display: 'flex',
      flex-direction: 'column',
      [breakpoints.up('md')]: {
        flex-direction: 'row',
      },
    },
    imageWrapper: {
      marginLeft: -16,
      margin-right: -16,
      overflow: 'hidden',
      '& img': {
        transition: 'all 500ms ease 0s !important',
      },
      [breakpoints.up('md')]: {
        order: 2,
      },
    },
    copyText: {
      padding: spacing(2.25),
      background: white,
      color: black,
      order: 2,
      top: spacing(-2.25),
      position: 'relative',

      [breakpoints.up('md')]: {
        order: 1,
        alignSelf: 'center',
        padding: 24px,
        right: -20,
        top: 0,
        maxWidth: 500,
      },
      '& p': {
        margin: 0,
        font-size: '.875rem',
        [breakpoints.up('md')]: {
          font-size: '1.125rem',
        },
      },
    },
  })
);
