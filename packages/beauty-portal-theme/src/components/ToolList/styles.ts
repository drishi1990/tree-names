import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    section: {
      margin-top: spacing(3.75),
      marginBottom: spacing(3.75),
    },
    sectionTitle: {
      font-size: '1.875rem',
      font-weight: 600,
      line-height: 1.1,
      position: 'relative',
      margin: 0,
      marginBottom: spacing(3.75),
      '&:before': {
        content: '""',
        background: palette.quaternary.main,
        position: 'absolute',
        right: 0,
        top: 0,
        width: '100vw',
        height: 20,
        z-index: -1,
      },
    },
    gridItem: {
      display: 'flex',
      flex-direction: 'column',
      align-items: 'center',
      marginBottom: 20px,
      '&:nth-child(1) svg': {
        transitionDelay: '0s',
      },
      '&:nth-child(2) svg': {
        transitionDelay: '.1s',
      },
      '&:nth-child(3) svg': {
        transitionDelay: '.25s',
      },
      '&:nth-child(4) svg': {
        transitionDelay: '.33s',
      },
    },
    icon: {
      background-color: #b8f0c0,
      borderRadius: '50%',
      width: 50,
      height: 50,
      display: 'flex',
      align-items: 'center',
      justifyContent: 'center',
      '& svg': {
        width: 20,
        height: 20,
        position: 'relative',
        opacity: 0,
        left: -30,
        transition: 'all .4s ease-in',
      },
      '&.in-view svg': {
        opacity: 1,
        left: 0,
      },
      [breakpoints.up('md')]: {
        width: 120,
        height: 120,
        '& svg': {
          width: 50,
          height: 50,
        },
      },
    },
    gridItemCaption: {
      font-size: '.75rem',
      font-weight: 600,
      line-height: 1.1,
      margin: 0,
      margin-top: 8px,
      text-align: 'center',
      [breakpoints.up('md')]: {
        font-size: '.875rem',
      },
    },
  })
);
