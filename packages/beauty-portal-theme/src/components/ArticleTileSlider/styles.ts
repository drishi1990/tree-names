import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    slider: {
      paddingTop: spacing(2.5),
      paddingBottom: spacing(2.5),
      position: 'relative',
      [breakpoints.up('md')]: {
        paddingTop: spacing(5),
        paddingBottom: spacing(5),
      },
      '& a': {
        textDecoration: 'none',
      },
      '& .swiper-container': {
        paddingBottom: spacing(2.5),
      },
      '& .swiper-button-prev': {
        display: 'none',
        [breakpoints.up('md')]: {
          display: 'block',
          color: palette.primary.main,
          top: '35%',
          height: 64,
          '&:hover': {
            color: palette.common.black,
            left: 4,
          },
          '&:after': {
            height: 64,
            fontSize: '4rem',
          },
        },
      },
      '& .swiper-button-next': {
        display: 'none',
        [breakpoints.up('md')]: {
          display: 'block',
          color: palette.common.black,
          top: '35%',
          height: 64,
          '&:hover': {
            color: palette.primary.main,
            right: 4,
          },
          '&:after': {
            height: 64,
            fontSize: '4rem',
          },
        },
      },
      '& .swiper-scrollbar': {
        backgroundColor: 'transparent',
      },
      '& .swiper-scrollbar-drag': {
        backgroundColor: palette.grey[20],
      },
      '& .swiper-container-horizontal > .swiper-scrollbar': {
        width: '100%',
        bottom: 0,
        height: 5,
        left: 0,
        [breakpoints.up('md')]: {
          height: 10,
        },
      },
      '& .swiper-slide': {
        opacity: 0.2,
        '& a': {
          margin: 2,
        },
      },
      '& .swiper-slide.swiper-slide-active': {
        opacity: 1,
        '& + div': {
          opacity: 1,
        },
        '& + div + div': {
          opacity: 1,
        },
        '& + div + div + div': {
          opacity: 1,
        },
      },
    },
    sectionTitle: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: spacing(1.875),
      [breakpoints.up('md')]: {
        marginBottom: spacing(2),
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
    sectionLink: {
      color: palette.common.black,
      textDecoration: 'none',
      fontSize: '.875rem',
      fontWeight: 700,
      alignSelf: 'flex-start',
      backgroundImage: `linear-gradient(120deg,${palette.primary.main} 0%,${palette.primary.main} 100%)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% .1875rem',
      backgroundPosition: '0 100%',
      [breakpoints.up('md')]: {
        fontSize: '1.125rem',
        marginLeft: spacing(3),
        marginBottom: spacing(1),
        alignSelf: 'center',
      },
      '&:hover, &:focus': {
        backgroundImage: `linear-gradient(120deg,${palette.common.black} 0%,${palette.common.black} 100%)`,
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
      backgroundColor: palette.primary.main,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 1.2s ease 0s !important',
      transform: 'perspective(1px) translateZ(0)',
      '&:before': {
        content: '""',
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: palette.common.black,
        transform: 'scaleX(0)',
        transformOrigin: '0 50%',
        transitionProperty: 'transform',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-out',
      },
      '& svg': {
        width: '1.5rem',
        height: '1.5rem',
        fill: palette.common.white,
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

    sliderLink: {
      display: 'block',
      '&:hover': {
        '& p > span': {
          backgroundImage: `linear-gradient(120deg,${palette.secondary.main} 0%,${palette.secondary.main} 100%)`,
        },
        '& .icon:before': {
          transform: 'scaleX(1)',
        },
        '& picture img': {
          transform: 'scale(1.1)',
        },
      },
    },
    sliderTitle: {},
    sliderItemCaption: {
      fontSize: '.875rem',
      fontWeight: 600,
      color: palette.common.black,
      marginTop: spacing(0.625),
      marginBottom: spacing(0.625),
      [breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
      '& span': {
        transition: 'all .15s',
        backgroundImage:
          'linear-gradient(120deg,rgba(184,240,192,0) 0%,rgba(184,240,192,0) 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% .1875rem',
        backgroundPosition: '0 100%',
      },
    },
    slideType: {
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: palette.common.white,
      fontSize: '.625rem',
      fontWeight: 600,
      lineHeight: 1.1,
      color: palette.quinary.main,
      paddingTop: spacing(0.375),
      paddingBottom: spacing(0.375),
      paddingLeft: spacing(0.625),
      paddingRight: spacing(0.625),
      zIndex: 1,
      textTransform: 'uppercase',
      letterSpacing: 1,
      [breakpoints.up('md')]: {
        fontSize: '.75rem',
        padding: spacing(0.75),
      },
    },
    navigationButton: {
      position: 'absolute',
      top: '30%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      background: 'transparent',
      border: 'none',
      padding: 0,
      margin: 0,
      width: 43,
      height: 80,
      cursor: 'pointer',
      '& svg': {
        width: 75,
        height: 80,
        transition: 'all .3s ease-in',
      },
      [breakpoints.up('md')]: {
        top: '45%',
      },
      '&:disabled': {
        opacity: 0.2,
        cursor: 'not-allowed',
      },
    },
    nextButton: {
      right: -60,
      '& svg': {
        marginLeft: -15,
      },
      '&:not(:disabled):hover': {
        '& svg': {
          fill: palette.primary.main,
          marginLeft: -10,
        },
      },
    },
    prevButton: {
      left: -60,
      '& svg': {
        marginLeft: -15,
        transform: 'rotate(180deg)',
      },
      '&:not(:disabled):hover': {
        '& svg': {
          fill: palette.primary.main,
          marginLeft: -20,
        },
      },
    },
    srOnly: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      clipPath: 'polygon(0 0,0 0,0 0)',
      height: '.0625rem',
      margin: '-.0625rem',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: '.0625rem',
      whiteSpace: 'nowrap',
    },
  })
);
