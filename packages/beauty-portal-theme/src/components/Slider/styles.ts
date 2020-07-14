import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    sectionTitle: {
      font-size: '2.5rem',
      font-weight: 600,
      margin: 0,
      marginBottom: 24px,
      margin-right: 24px,
    },
    sliderWrapper: {
      position: 'relative',
      [breakpoints.up('md')]: {
        margin: 0,
      },
      '& .swiper-lazy': {
        opacity: 0,
        transition: 'all .3s ease-out',
        '&.swiper-lazy-loaded': {
          opacity: 1,
        },
      },
      '& figure': {
        maxWidth: 752,
      },
      '& picture': {
        display: 'block',
      },
      '& .swiper-pagination': {
        display: 'flex',
        justifyContent: 'center',
        position: 'static',
        margin-top: 16px,
        marginBottom: 16px,
        [breakpoints.up('md')]: {
          margin-top: 20px,
          marginBottom: 20px,
        },
      },
      '& .swiper-pagination-bullet': {
        background-color: palette.grey[20],
        width: 10,
        height: 10,
        [breakpoints.up('md')]: {
          width: 20,
          height: 20,
        },
      },

      '& .swiper-pagination-bullet-active': {
        background-color: black,
      },
    },
    copy: {
      background-color: white,
      maxWidth: '96%',
      margin-top: spacing(-1.875),
      marginBottom: 0,
      marginLeft: 'auto',
      margin-right: 'auto',
      z-index: 1,
      position: 'relative',
      [breakpoints.up('md')]: {
        position: 'absolute',
        top: '50%',
        right: 30,
        transform: 'translateY(-50%)',
        z-index: 1,
        maxWidth: 462,
        width: 462,
      },
    },
    heading: {
      marginBottom: 14px,
    },
    copyInner: {
      padding: 20px,
      [breakpoints.up('md')]: {
        padding: 24px,
      },
    },
    slideType: {
      marginBottom: 8px,
      text-transform: 'uppercase',
      letter-spacing: 2,
      color: #2c5270,
      font-size: '.75rem',
      font-weight: 700,
    },
    callToAction: {
      font-size: '.875rem',
      font-weight: 700,
      background-color: palette.primary.main,
      color: black,
      padding-top: spacing(1.25),
      padding-bottom: spacing(1.25),
      padding-left: 16px,
      padding-right: 16px,
      display: 'inline-block',

      position: 'relative',
      transition: 'all .3s ease-out',
      transform: 'perspective(1px) translateZ(0)',
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
      [breakpoints.up('md')]: {
        font-size: '1.125rem',
        padding-top: spacing(1.75),
        padding-bottom: spacing(1.75),
        padding-left: 20px,
        padding-right: 20px,
      },
    },
    carouselArrow: {
      position: 'absolute',
      z-index: 2,
      top: 'calc(50% - 50px)',
      width: 77,
      height: 77,
      cursor: 'pointer',
      background-color: 'transparent',
      border: 'none',
    },
    navigationButton: {
      display: 'none',
      position: 'absolute',
      top: '30%',
      transform: 'translateY(-50%)',
      z-index: 2,
      background: 'transparent',
      border: 'none',
      padding: 0,
      margin: 0,
      width: 26,
      height: 50,
      cursor: 'pointer',
      '& svg': {
        transition: 'all .3s ease-in',
      },
      [breakpoints.up('sm')]: {
        display: 'block',
        top: '45%',
        height: 80,
        width: 45,
        '& svg': {
          transition: 'all .3s ease-in',
        },
      },
      '&:disabled': {
        opacity: 0.2,
        cursor: 'not-allowed',
      },
    },
    nextButton: {
      right: 10,
      '&:not(:disabled):hover': {
        '& svg': {
          fill: palette.primary.main,
        },
      },
      [breakpoints.up('md')]: {
        right: -60,
      },
    },
    prevButton: {
      left: 10,
      '& svg': {
        transform: 'rotate(180deg)',
      },
      '&:not(:disabled):hover': {
        '& svg': {
          fill: palette.primary.main,
        },
      },
      [breakpoints.up('md')]: {
        left: -60,
      },
    },
    // Tile Slider
    sliderLink: {
      display: 'block',
      '&:hover': {
        '& p > span': {
          background-image: `linear-gradient(120deg,${#b8f0c0} 0%,${#b8f0c0} 100%)`,
        },
        '& .icon:before': {
          transform: 'scaleX(1)',
        },
        '& picture img': {
          transform: 'scale(1.1)',
        },
      },
    },
    heroImage: {
      position: 'relative',
      overflow: 'hidden',
      '& picture img': {
        transition: 'all .8s ease-out 0s !important',
      },
    },
    iconPlay: {
      width: '2.5rem',
      height: '2.5rem',
      bottom: '.5rem',
      left: '.5rem',
      background-color: palette.primary.main,
      position: 'absolute',
      display: 'flex',
      align-items: 'center',
      justifyContent: 'center',
      transition: 'all 1.2s ease 0s !important',
      transform: 'perspective(1px) translateZ(0)',
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
      '& svg': {
        width: '1.5rem',
        height: '1.5rem',
        fill: white,
        [breakpoints.up('md')]: {
          width: '2rem',
          height: '2rem',
        },
      },
      [breakpoints.up('md')]: {
        width: '3.25rem',
        height: '3.25rem',
        bottom: '.6875rem',
        left: '.6875rem',
      },
    },
    sliderItemCaption: {
      font-size: '.875rem',
      font-weight: 600,
      color: black,
      margin-top: 5px,
      marginBottom: 5px,
      [breakpoints.up('md')]: {
        font-size: '1.125rem',
      },
      '& span': {
        transition: 'all .15s',
        background-image:
          'linear-gradient(120deg,rgba(184,240,192,0) 0%,rgba(184,240,192,0) 100%)',
        background-repeat: 'no-repeat',
        background-size: '100% .1875rem',
        background-position: '0 100%',
      },
    },
    tileSlideType: {
      position: 'absolute',
      top: 0,
      left: 0,
      background-color: white,
      font-size: '.625rem',
      font-weight: 600,
      line-height: 1.1,
      color: #2c5270,
      padding-top: 3px,
      padding-bottom: 3px,
      padding-left: 5px,
      padding-right: 5px,
      z-index: 1,
      text-transform: 'uppercase',
      letter-spacing: 1,
      [breakpoints.up('md')]: {
        font-size: '.75rem',
        padding: 6px,
      },
    },
    textCenter: {
      text-align: 'center',
    },
    pb20: {
      padding-bottom: 20px,
      [breakpoints.up('md')]: {
        padding-bottom: 0,
      },
    },
  })
);
