import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    newsletter: {
      position: 'relative',
      padding-bottom: 32px,
      padding-top: 32px,
      text-align: 'center',
    },
    newsletterContent: {
      position: 'relative',
      z-index: 1,
      max-width: 760,
      margin: 'auto',
      padding-left: 20px,
      padding-right: 20px,
    },
    newsletterTitle: {
      font-size: '1.125rem',
      line-height: 1.3,
      margin: 0,
      [breakpoints.up('md')]: {
        font-size: '1.875rem',
        margin-bottom: 30px,
      },
      '& p': {
        margin: 0,
      },
    },
    subscribe: {
      font-size: '1.125rem',
      font-weight: 700,
      width: 160,
      height: 50,
      cursor: 'pointer',
      background-color: var(--primary-color),
      border: `1px solid ${var(--primary-color)}`,
      color: black,
      position: 'relative',
      transform: 'perspective(1px) translateZ(0)',
      display: 'flex',
      align-items: 'center',
      justify-content: 'center',

      margin: 'auto',
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
    },
  })
);
