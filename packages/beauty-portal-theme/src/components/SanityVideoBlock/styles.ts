import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    section: {
      background-color: palette.tertiary.main,
      padding-top: 0,
      padding-bottom: 16px,
      [breakpoints.up('md')]: {
        padding-top: 0,
        padding-bottom: 0,
      },
    },
    sectionTitle: {
      [breakpoints.up('md')]: {
        margin-bottom: 20px,
      },
    },
    content: {
      display: 'flex',
      flex-direction: 'column',
      [breakpoints.up('md')]: {
        flex-direction: 'row',
      },
      '& iframe': {
        [breakpoints.up('md')]: {
          order: 2,
          height: 380,
        },
      },
    },
    copyText: {
      padding: spacing(2.25),
      background: white,
      order: 2,
      [breakpoints.up('md')]: {
        order: 1,
        alignSelf: 'center',
        padding: 24px,
        position: 'relative',
        right: -20,
      },
      '& p': {
        margin: 0,
        font-size: '1.125rem',
      },
    },
  })
);
