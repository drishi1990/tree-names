import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { Typography } from '@material-ui/core';
import SwiperCore, { Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderInterface } from './models';
import { urlFor } from '../../helpers/imageUrl';
import useStyles from './styles';
import { ReactComponent as Next } from '../../images/icons/next.svg';
import './slider.scss';

SwiperCore.use([Lazy]);

const Slider: FunctionComponent<SliderInterface> = ({ data }) => {
  const classes = useStyles();
  const [swiper, updateSwiper] = useState(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const swiperNext = () => {
    if (swiper) {
      swiper.slideNext();
      setIsFirstSlide(false);
      if (swiper.isEnd) {
        setIsLastSlide(true);
      }
    }
  };

  const swiperPrev = () => {
    if (swiper) {
      swiper.slidePrev();
      setIsLastSlide(false);
      if (swiper.isBeginning) {
        setIsFirstSlide(true);
      }
    }
  };

  return (
    <>
      <div className={classes.sliderWrapper}>
        <button
          className={classNames(classes.navigationButton, classes.nextButton)}
          type="button"
          onClick={swiperNext}
          disabled={isLastSlide}
        >
          <Next />
          <span className="srOnly">Next</span>
        </button>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          speed={700}
          threshold={5}
          onSwiper={updateSwiper}
          lazy={true}
          preloadImages={false}
        >
          {data.map((slide: any, index: number) => (
            <SwiperSlide key={slide.path}>
              {slide.heroImage && (
                <figure>
                  <picture
                    className="bp-image__placeholder"
                    style={{
                      paddingTop: '56.25%',
                      background: `url(${slide._rawHeroImage.asset.metadata.lqip})`,
                      backgroundSize: 'cover',
                    }}
                  >
                    <img
                      data-srcset={`${urlFor(slide._rawHeroImage)
                        .width(414)
                        .height(232)
                        .fit('max')
                        .auto('format')
                        .quality(80)
                        .url()
                        .toString()} 752w,
                      ${urlFor(slide._rawHeroImage)
                        .width(752)
                        .height(423)
                        .quality(80)
                        .fit('max')
                        .auto('format')
                        .url()
                        .toString()} 1024w`}
                      alt={slide.heroImage.alt}
                      className="swiper-lazy"
                    />
                  </picture>
                </figure>
              )}
              <div className={classes.copy}>
                <div className={classes.copyInner}>
                  <div className={classes.slideType}>{slide._type}</div>
                  <Typography variant="h2" className={classes.heading}>
                    {slide.headline}
                  </Typography>
                  <Link className={classes.callToAction} to={slide.path}>
                    Go to Article
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={classNames(classes.navigationButton, classes.prevButton)}
          type="button"
          onClick={swiperPrev}
          disabled={isFirstSlide}
        >
          <Next />
          <span className="srOnly">Prev</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
