import React, { FunctionComponent, useState } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { urlFor } from '../../helpers/imageUrl';
import { Typography } from '@material-ui/core';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';
import { TileSliderInterface } from './models';
import { ReactComponent as Next } from '../../images/icons/next.svg';
import { getSearchUrlWithTagsAndCategory } from '../../helpers/searchUrl';
import useStyles from './styles';

const TileSlider: FunctionComponent<TileSliderInterface> = ({
  slides,
  headline,
  searchCtaLabel,
  searchTags,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });
  const [swiper, updateSwiper] = useState(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const classes = useStyles();
  const params = {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
    },
  };

  const renderer = slide => {
    return (
      <div key={slide.name}>
        <div>
          <Link className={classes.sliderLink} to={slide.path}>
            {slide.image && (
              <figure>
                {inView ? (
                  <picture
                    className="bp-image__placeholder"
                    style={{
                      paddingTop: '100%',
                      background: `url(${slide._rawImage.asset.metadata.lqip})`,
                      backgroundSize: 'cover',
                    }}
                  >
                    <source
                      media="screen and (min-width: 560px)"
                      srcSet={`${urlFor(slide._rawImage)
                        .width(280)
                        .height(280)
                        .fit('max')
                        .auto('format')
                        .url()
                        .toString()} 1x, ${urlFor(slide._rawImage)
                        .width(560)
                        .height(560)
                        .fit('max')
                        .auto('format')
                        .url()
                        .toString()} 2x`}
                    />
                    <source
                      media="screen and (min-width: 320px)"
                      srcSet={`${urlFor(slide._rawImage)
                        .width(160)
                        .height(160)
                        .fit('max')
                        .auto('format')
                        .url()
                        .toString()} 1x, ${urlFor(slide._rawImage)
                        .width(320)
                        .height(320)
                        .fit('max')
                        .auto('format')
                        .url()
                        .toString()} 2x`}
                    />
                    <img
                      src={urlFor(slide._rawImage)
                        .width(280)
                        .height(280)
                        .fit('max')
                        .url()}
                      alt={slide.image.alt}
                    />
                  </picture>
                ) : null}
              </figure>
            )}
            <h3 className={classes.sliderItemCaption}>
              <span>{slide.name}</span>
            </h3>
          </Link>
        </div>
      </div>
    );
  };

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
    <div className={classes.slider} ref={ref} data-inview={inView}>
      <div className={classes.sectionTitle}>
        <Typography variant="h2" className={classes.sliderTitle}>
          {headline}
        </Typography>
        {searchCtaLabel && (
          <Link
            className={classes.sectionLink}
            to={getSearchUrlWithTagsAndCategory(searchTags)}
          >
            {searchCtaLabel}
          </Link>
        )}
      </div>
      <button
        className={classNames(classes.navigationButton, classes.nextButton)}
        type="button"
        onClick={swiperNext}
        disabled={isLastSlide}
      >
        <Next />
        <span className="srOnly">Next</span>
      </button>
      <Swiper {...params} getSwiper={updateSwiper}>
        {slides.map(slide => renderer(slide))}
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
  );
};

export default TileSlider;
