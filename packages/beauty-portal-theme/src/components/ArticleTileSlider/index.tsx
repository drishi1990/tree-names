import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import Swiper from 'react-id-swiper';
import { useInView } from 'react-intersection-observer';
import { urlFor } from '../../helpers/imageUrl';

import { ArticleTileSliderInterface } from './models';
import { ReactComponent as PlayVideo } from '../../images/icons/play.svg';
import { ReactComponent as Next } from '../../images/icons/next.svg';
import { getSearchUrlWithTagsAndCategory } from '../../helpers/searchUrl';
import useStyles from './styles';

const ArticleTileSlider: FunctionComponent<ArticleTileSliderInterface> = ({
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
    spaceBetween: 20,
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
      <div key={slide.headline}>
        <div>
          <span className={classes.slideType}>{slide._type}</span>
          <Link className={classes.sliderLink} to={slide.path}>
            {slide.heroImage && (
              <div className={classes.heroImage}>
                <figure>
                  {inView ? (
                    <picture
                      className="bp-image__placeholder"
                      style={{
                        paddingTop: '100%',
                        background: `url(${slide._rawHeroImage.asset.metadata.lqip})`,
                        backgroundSize: 'cover',
                      }}
                    >
                      <source
                        media="screen and (min-width: 560px)"
                        srcSet={`${urlFor(slide._rawHeroImage)
                          .width(280)
                          .height(280)
                          .fit('max')
                          .auto('format')
                          .url()
                          .toString()}`}
                      />
                      <source
                        media="screen and (min-width: 320px)"
                        srcSet={`${urlFor(slide._rawHeroImage)
                          .width(160)
                          .height(160)
                          .fit('max')
                          .auto('format')
                          .url()
                          .toString()}`}
                      />
                      <img
                        src={urlFor(slide._rawHeroImage)
                          .width(280)
                          .height(280)
                          .fit('max')
                          .url()}
                        alt={slide.heroImage.alt}
                      />
                    </picture>
                  ) : null}
                </figure>
                {slide.heroVideo && (
                  <span className={`icon ${classes.iconPlay}`}>
                    <PlayVideo />
                    <span hidden>Play Video</span>
                  </span>
                )}
              </div>
            )}
            <h3 className={classes.sliderItemCaption}>
              <span>{slide.headline}</span>
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
        <h2 className={classes.sliderTitle}>{headline}</h2>
        {searchCtaLabel && (
          <Link
            className={classes.sectionLink}
            to={getSearchUrlWithTagsAndCategory(searchTags)}
          >
            {searchCtaLabel}
          </Link>
        )}
      </div>
      {slides.length > 3 && (
        <button
          className={classNames(classes.navigationButton, classes.nextButton)}
          type="button"
          onClick={swiperNext}
          disabled={isLastSlide}
        >
          <Next />
          <span className="srOnly">Next</span>
        </button>
      )}
      <Swiper {...params} getSwiper={updateSwiper}>
        {slides.map(slide => renderer(slide))}
      </Swiper>
      {slides.length > 3 && (
        <button
          className={classNames(classes.navigationButton, classes.prevButton)}
          type="button"
          onClick={swiperPrev}
          disabled={isFirstSlide}
        >
          <Next />
          <span className="srOnly">Prev</span>
        </button>
      )}
    </div>
  );
};

export default ArticleTileSlider;
