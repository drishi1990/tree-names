import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Slider from '../Slider';
import { ArticleTileSliderInterface } from './models';
import { getSearchUrlWithTagsAndCategory } from '../../helpers/searchUrl';
import styles from './styles.module.scss';

const ArticleTileSlider: FunctionComponent<ArticleTileSliderInterface> = ({
  slides,
  headline,
  searchCtaLabel,
  searchTags,
}) => {
  const breakpoints = {
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

  return (
    <div className={styles.slider}>
      <div className={styles.sectionTitle}>
        <h2 className={styles.sliderTitle}>{headline}</h2>
        {searchCtaLabel && (
          <Link
            className={styles.sectionLink}
            to={getSearchUrlWithTagsAndCategory(searchTags)}
          >
            {searchCtaLabel}
          </Link>
        )}
      </div>
      <Slider
        type="tile"
        slides={slides}
        spaceBetween={30}
        slidesPerView={4}
        speed={700}
        threshold={5}
        lazy={true}
        preloadImages={false}
        freeMode={true}
        watchSlidesVisibility={true}
        breakpoints={breakpoints}
      />
    </div>
  );
};

export default ArticleTileSlider;
