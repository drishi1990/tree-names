import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import SwiperCore, { Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInView } from 'react-intersection-observer';
import { SliderInterface } from './models';
import { urlFor } from '../../helpers/imageUrl';
import { ReactComponent as Next } from '../../images/icons/next.svg';
import { ReactComponent as PlayVideo } from '../../images/icons/play.svg';
import styles from './styles.module.scss';
import './slider.scss';

SwiperCore.use([Lazy]);

const Slider: FunctionComponent<SliderInterface> = ({
  type,
  slides,
  spaceBetween,
  slidesPerView,
  speed,
  threshold,
  lazy,
  preloadImages,
  freeMode,
  watchSlidesVisibility,
  breakpoints,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '5px 0px',
  });
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

  const renderTileSlides = slide => {
    return (
      <SwiperSlide key={slide.headline}>
        <div>
          {slide._type && (
            <span className={styles.tileSlideType}>{slide._type}</span>
          )}
          <Link className={styles.sliderLink} to={slide.path}>
            <div className={styles.heroImage}>
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
                <span className={`icon ${styles.iconPlay}`}>
                  <PlayVideo />
                  <span hidden>Play Video</span>
                </span>
              )}
            </div>
            <h3 className={styles.sliderItemCaption}>
              <span>{slide.headline}</span>
            </h3>
          </Link>
        </div>
      </SwiperSlide>
    );
  };

  const renderProductSlides = slide => {
    return (
      <SwiperSlide key={slide.headline}>
        <div>
          <Link
            className={classNames(styles.sliderLink, styles.textCenter)}
            to={slide.path}
          >
            <div className={styles.heroImage}>
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
                        .toString()}`}
                    />
                    <source
                      media="screen and (min-width: 320px)"
                      srcSet={`${urlFor(slide._rawImage)
                        .width(160)
                        .height(160)
                        .fit('max')
                        .auto('format')
                        .url()
                        .toString()}`}
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
            </div>
            <h3 className={styles.sliderItemCaption}>
              <span>{slide.name}</span>
            </h3>
          </Link>
        </div>
      </SwiperSlide>
    );
  };

  const renderHeroSlides = (slide, index) => (
    <SwiperSlide key={slide.path}>
      {slide.heroImage && (
        <figure>
          {index === 0 && (
            <link
              rel="preload"
              as="image"
              href={`${urlFor(slide._rawHeroImage)
                .width(752)
                .height(423)
                .quality(80)
                .fit('max')
                .auto('format')
                .url()
                .toString()}`}
            />
          )}
          <picture
            className="bp-image__placeholder"
            style={{
              paddingTop: '56.25%',
              background:
                index === 0
                  ? `url(${slide.heroImage.asset.localFile.childImageSharp.fixed.base64})`
                  : `url(${slide._rawHeroImage.asset.metadata.lqip})`,
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
                .toString()} 414w,
                      ${urlFor(slide._rawHeroImage)
                        .width(752)
                        .height(423)
                        .quality(80)
                        .fit('max')
                        .auto('format')
                        .url()
                        .toString()} 752w`}
              alt={slide.heroImage.alt}
              className="swiper-lazy"
            />
          </picture>
        </figure>
      )}
      {type === 'hero' && (
        <div className={styles.copy}>
          <div className={styles.copyInner}>
            <div className={styles.slideType}>{slide._type}</div>
            <h2 className={styles.heading}>{slide.headline}</h2>
            <Link className={styles.callToAction} to={slide.path}>
              Go to Article
            </Link>
          </div>
        </div>
      )}
    </SwiperSlide>
  );
  return (
    <>
      <div
        className={classNames(
          styles.sliderWrapper,
          type === 'hero' ? styles.pb20 : null
        )}
        ref={ref}
        data-inview={inView}
      >
        <button
          className={classNames(styles.navigationButton, styles.nextButton)}
          type="button"
          onClick={swiperNext}
          disabled={isLastSlide}
        >
          <Next />
          <span className="srOnly">Next</span>
        </button>
        <Swiper
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          speed={speed}
          threshold={threshold}
          onSwiper={updateSwiper}
          lazy={lazy}
          preloadImages={preloadImages}
          freeMode={freeMode}
          watchSlidesVisibility={watchSlidesVisibility}
          {...breakpoints}
        >
          {slides.map((slide: any, index: number) => {
            return type === 'hero'
              ? renderHeroSlides(slide, index)
              : type === 'tile'
              ? renderTileSlides(slide)
              : renderProductSlides(slide);
          })}
        </Swiper>
        <button
          className={classNames(styles.navigationButton, styles.prevButton)}
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
