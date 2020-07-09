import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { urlFor } from '../../helpers/imageUrl';
import { HeroSliderInterface } from './models';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';
import useStyles from './styles';
import { ReactComponent as Next } from '../../images/icons/next.svg';

const HeroSlider: FunctionComponent<HeroSliderInterface> = ({
  name,
  slides,
  headline,
}) => {
  const [swiper, updateSwiper] = useState(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const classes = useStyles();
  const params = {
    threshold: 5,
    slidesPerView: 1,
    spaceBetween: 0,
    paginationClickable: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 700,
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
      <Swiper {...params} getSwiper={updateSwiper}>
        {slides.map((slide: any, index: number) => (
          <div key={slide.path}>
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
                  <source
                    media="screen and (min-width: 752px)"
                    srcSet={`${urlFor(slide._rawHeroImage)
                      .width(752)
                      .height(423)
                      .fit('max')
                      .auto('format')
                      .url()
                      .toString()}`}
                  />
                  <source
                    media="screen and (min-width: 320px)"
                    srcSet={`${urlFor(slide._rawHeroImage)
                      .width(414)
                      .height(232)
                      .fit('max')
                      .auto('format')
                      .url()
                      .toString()}`}
                  />
                  <img
                    src={urlFor(slide._rawHeroImage)
                      .width(712)
                      .height(399)
                      .fit('max')
                      .auto('format')
                      .url()}
                    alt={slide.heroImage.alt}
                  />
                </picture>
              </figure>
            )}
            <div className={classes.copy}>
              <div className={classes.copyInner}>
                <div className={classes.slideType}>{slide._type}</div>
                <h2 className={classes.heading}>{slide.headline}</h2>
                <Link className={classes.callToAction} to={slide.path}>
                  Go to Article
                </Link>
              </div>
            </div>
          </div>
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
  );
};

export default HeroSlider;
