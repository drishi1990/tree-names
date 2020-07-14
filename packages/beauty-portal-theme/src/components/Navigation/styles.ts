import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    NavigationToggleButton: {
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      '&.is-active': {
        '& div': {
          '& span': {
            '&:first-child': {
              top: '.6875rem',
              width: 0,
              left: '50%',
            },
            '&:nth-child(4)': {
              top: '.6875rem',
              width: 0,
              left: '50%',
            },
            '&:nth-child(3)': {
              transform: 'rotate(-45deg)',
              width: '120%',
              margin-left: '-10%',
            },
            '&:nth-child(2)': {
              transform: 'rotate(45deg)',
              width: '120%',
              margin-left: '-10%',
            },
          },
        },
      },
      [breakpoints.up('md')]: {
        display: 'none',
      },
    },
    NavigationToggleButtonIcon: {
      width: '1.5rem',
      height: '1.5rem',
      transition: '1s ease-in-out',
      cursor: 'pointer',
      position: 'relative',
    },
    NavigationToggleButtonIconBar: {
      transition: '.3s ease-in-out',
      display: 'block',
      position: 'absolute',
      height: '.0625rem',
      width: '100%',
      background-color: white,
      opacity: 1,
      left: 0,
      top: '-.3125rem',
      '&:first-child': {
        top: '.0625rem',
      },
      '&:nth-child(2)': {
        top: '50%',
        transform: 'translateY(-50%)',
      },
      '&:nth-child(3)': {
        top: '50%',
        transform: 'translateY(-50%)',
      },
      '&:nth-child(4)': {
        top: '1.375rem',
      },
    },
    screenReaderOnly: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      clipPath: 'polygon(0 0, 0 0, 0 0)',
      height: '.0625rem',
      margin: '-.0625rem',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: '.0625rem',
      whiteSpace: 'nowrap',
    },
    navigation: {
      position: 'fixed',
      top: '60px',
      left: 0,
      right: 0,
      bottom: 0,
      background: black,
      z-index: 1,
      height: 0,
      transition: 'height .3s ease-in-out',
      [breakpoints.up('md')]: {
        display: 'block',
        position: 'static',
        height: 'auto',
      },
    },
    activeNavigation: {
      height: 'auto',
    },
    navigationInnerWrapper: {
      overflow: 'auto',
      height: '100%',
      [breakpoints.up('md')]: {
        height: 'auto',
        display: 'block',
        overflow: 'visible',
      },
    },
    navigationList: {
      display: 'flex',
      flex-direction: 'column',
      padding: 0,
      padding-top: 10px,
      padding-bottom: 10px,
      listStyleType: 'none',
      margin: 0,

      [breakpoints.up('md')]: {
        align-items: 'center',
        flex-direction: 'row',
        borderTop: 'none',
        padding: 0,
      },
    },
    navigationListItem: {
      position: 'relative',
      '&:hover > a, &:focus-within': {
        background-color: var(--primary-color),
      },
      '&:hover > div': {
        height: 'auto',
      },
    },
    navigationLink: {
      font-size: '1rem',
      color: white,
      padding: 14px,
      width: '100%',
      text-align: 'left',
      position: 'relative',
      display: 'flex',
      justify-content: 'space-between',
      border: 'none',
      background-color: 'transparent',
      cursor: 'pointer',
      text-transform: 'capitalize',
      '&:hover + div': {
        height: 'auto',
      },

      [breakpoints.up('md')]: {
        padding: 0,
        padding-left: 10px,
        padding-right: 10px,
        font-weight: '700',
        width: 'auto',
        display: 'flex',
        align-items: 'center',
        height: '59px',
        '&:hover, &:focus': {
          background-color: var(--primary-color),
        },
        '&:focus + div': {
          height: 'auto',
        },
      },

      [breakpoints.up('lg')]: {
        padding-left: 20px,
        padding-right: 20px,
        font-size: '1.125rem',
      },
    },
    dropdownMenuIcon: {
      [breakpoints.up('md')]: {
        position: 'static',
        margin-left: 10px,
      },
    },
    dropdownMenuIconSVG: {
      width: '.75rem',
      height: '.75rem',
      fill: 'white',
      display: 'block',
    },
    subNavigation: {
      overflow: 'hidden',
      transition: 'height .3s ease-in-out',
      height: 0,

      [breakpoints.up('md')]: {
        position: 'absolute',
        top: '100%',
        left: 0,
        overflow: 'auto',
        height: 0,
        background: black,
        minWidth: '200px',
        '&:focus-within': {
          height: 'auto',
        },
      },
    },
    subNavigationList: {
      listStyleType: 'none',
      padding: 0,
      [breakpoints.up('md')]: {
        padding-top: 10px,
        padding-bottom: 10px,
        borderTop: `4px solid ${var(--primary-color)}`,
      },
    },
    subNavigationListItem: {},
    subNavigationLink: {
      padding: 14px,
      font-size: '1rem',
      color: 'white',
      width: '100%',
      text-align: 'left',
      position: 'relative',
      display: 'block',
      '&:hover': {
        background-color: palette.grey[50],
      },
    },
  })
);
