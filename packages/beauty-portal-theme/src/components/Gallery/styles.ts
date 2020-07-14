import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    galleryWrapper: {
      padding: 0,
      padding-bottom: 20px,
      marginBottom: 20px,
      '& figure': {
        maxWidth: 500,
        margin: 'auto',
      },
      '& .swiper-container': {
        maxWidth: 752,
        margin: 'auto',
        '& .swiper-wrapper': {
          padding-top: 40,
          [breakpoints.up('sm')]: {
            padding-top: 0,
          },
        },
        '& .swiper-slide': {
          background-color: '#f4f4f4',
        },
      },
      '& .swiper-container-thumbs': {
        marginBottom: 24px,
        '& .swiper-slide': {
          width: 80,
          opacity: 0.4,
          '&.swiper-slide-thumb-active': {
            opacity: 1,
          },
        },
      },
      '& .swiper-container-horizontal > .swiper-pagination-bullets': {
        top: 10,
        bottom: 'auto',
      },
      '& .swiper-button-prev, & .swiper-button-next, & .swiper-container-thumbs': {
        display: 'none',
        [breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      '& .swiper-pagination': {
        [breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      '& .swiper-button-next:after, & .swiper-button-prev:after': {
        color: palette.primary.main,
      },
      '& .swiper-pagination-bullet-active': {
        background: palette.primary.main,
      },
    },
  })
);
