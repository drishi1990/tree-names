import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    slider: {
      padding-top: 20px,
      padding-bottom: 20px,
      position: 'relative',
      marginLeft: 16px,
      [breakpoints.up('md')]: {
        padding-top: spacing(5),
        padding-bottom: spacing(5),
      },
      '& .swiper-container': {
        padding-bottom: 20px,
      },

      '& .swiper-scrollbar': {
        background-color: 'transparent',
      },
      '& .swiper-scrollbar-drag': {
        background-color: palette.grey[20],
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
    },
    sectionTitle: {
      display: 'flex',
      flex-direction: 'column',
      marginBottom: 14px,
      [breakpoints.up('md')]: {
        marginBottom: 16px,
        flex-direction: 'row',
        align-items: 'center',
      },
    },
    sectionLink: {
      color: black,
      font-size: '.875rem',
      font-weight: 700,
      alignSelf: 'flex-start',
      background-image: `linear-gradient(120deg,${palette.primary.main} 0%,${palette.primary.main} 100%)`,
      background-repeat: 'no-repeat',
      background-size: '100% .1875rem',
      background-position: '0 100%',
      [breakpoints.up('md')]: {
        font-size: '1.125rem',
        marginLeft: 24px,
        marginBottom: 8px,
        alignSelf: 'center',
      },
      '&:hover, &:focus': {
        background-image: `linear-gradient(120deg,${black} 0%,${black} 100%)`,
      },
    },
    sliderTitle: {
      font-size: '1.375rem',
      font-weight: 600,
      line-height: 1.1,
      letter-spacing: 0,
      margin: 0,
      marginBottom: 8px,
      [breakpoints.up('md')]: {
        font-size: '2.25rem',
      },
    },
  })
);
