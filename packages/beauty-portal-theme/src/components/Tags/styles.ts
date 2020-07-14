import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    tags: {
      margin-top: spacing(3.75),
      marginBottom: 20px,
      [breakpoints.up('md')]: {
        marginBottom: spacing(3.75),
      },
    },
    tagsTitle: {
      font-size: '1.375rem',
      line-height: 1.1,
      font-weight: 600,
      position: 'relative',
      margin: 0,
      marginBottom: 16px,
      padding-top: 8px,
      '&:before': {
        content: '""',
        background: #b8f0c0,
        position: 'absolute',
        right: 0,
        top: 0,
        width: '100vw',
        height: 20,
        z-index: -1,
      },
      [breakpoints.up('md')]: {
        font-size: '2.5rem',
        padding-top: 5px,
        marginBottom: spacing(3.75),
      },
    },
    tagList: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flex-wrap: 'wrap',
    },
    tagListItem: {
      margin-right: spacing(1.25),
      marginBottom: spacing(1.25),
    },
    tagsListLink: {
      color: black,
      display: 'inline-block',

      font-size: '.875rem',
      font-weight: 700,
      line-height: 1.1,
      background-image: `linear-gradient(120deg,${#b8f0c0} 0%,${#b8f0c0} 100%)`,
      background-repeat: 'no-repeat',
      background-size: '100% .1875rem',
      background-position: '0 100%',
      [breakpoints.up('md')]: {
        font-size: '1.125rem',
      },
    },
  })
);
