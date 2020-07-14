import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    sectionTitle: {
      display: 'flex',
      flex-direction: 'column',
      margin-bottom: 14px,
      [breakpoints.up('md')]: {
        margin-bottom: 24px,
        flex-direction: 'row',
        align-items: 'center',
      },
    },
    sectionLink: {
      color: black,

      font-size: '.875rem',
      font-weight: 700,
      alignSelf: 'flex-start',
      background-image: `linear-gradient(120deg,${var(--primary-color)} 0%,${var(--primary-color)} 100%)`,
      background-repeat: 'no-repeat',
      background-size: '100% .1875rem',
      background-position: '0 100%',
      [breakpoints.up('md')]: {
        font-size: '1.125rem',
        margin-left: 24px,
        margin-bottom: 8px,
        alignSelf: 'center',
      },
      '&:hover, &:focus': {
        background-image: `linear-gradient(120deg,${black} 0%,${black} 100%)`,
      },
    },
    slider: {
      padding-top: 20px,
      position: 'relative',
      [breakpoints.up('md')]: {
        padding-top: 0,
        padding-bottom: 20px,
      },
      '& .swiper-scrollbar': {
        background-color: 'transparent',
      },
      '& .swiper-scrollbar-drag': {
        background-color: 'rgba(0,0,0,.2)',
      },
      '& .swiper-container-horizontal > .swiper-scrollbar': {
        width: '100%',
        height: 5,
        [breakpoints.up('md')]: {
          height: 10,
        },
      },
    },
    sliderLink: {
      display: 'block',
      '&:hover': {
        '& p > span': {
          background-image: `linear-gradient(120deg,${#b8f0c0} 0%,${#b8f0c0} 100%)`,
        },
        '& .icon:before': {
          transform: 'scaleX(1)',
        },
      },
    },
    sliderTitle: {},
    sliderItemCaption: {
      font-size: '.875rem',
      font-weight: 600,
      color: black,
      margin-top: 14px,
      margin-bottom: 5px,
      text-align: 'center',
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
  })
);
