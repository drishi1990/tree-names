import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ palette }: Theme) =>
  createStyles({
    element: {
      backgroundColor: palette.primary.main,
      border: 'none',
      color: palette.common.black,
      position: 'fixed',
      width: 45,
      height: 45,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      right: 15,
      bottom: 20,
      zIndex: 2,
      transform: 'perspective(1px) translateZ(0) translateX(100px)',
      transition: 'all .5s',
      '&:before': {
        content: '""',
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 'auto',
        background: palette.common.black,
        transform: 'scaleY(0)',
        transformOrigin: '0 100%',
        transitionProperty: 'transform',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'ease-out',
      },
      '&:hover': {
        '&:before': {
          transform: 'scaleY(1)',
        },
        '& svg': {
          fill: palette.primary.main,
        },
      },
      '& svg': {
        fill: palette.common.black,
        width: 24,
        height: 24,
        transition: 'all .5s',
      },
    },
    isActive: {
      transform: 'perspective(1px) translateZ(0) translateX(0)',
    },
    isHidden: {
      transform: 'perspective(1px) translateZ(0) translateX(100px)',
    },
  })
);
