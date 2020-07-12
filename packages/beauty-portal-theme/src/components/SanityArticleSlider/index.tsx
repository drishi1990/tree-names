import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { SanityArticleSliderInterface } from './models';
import ArticleTileSlider from '../ArticleTileSlider';
import HeroSlider from '../HeroSlider';
import TileStacker from '../TileStacker';

// import useStyles from './styles';

const componentMap = {
  tile: ArticleTileSlider,
  hero: HeroSlider,
  stacker: TileStacker,
  default: TileStacker,
};

const SanityArticleSlider: FunctionComponent<SanityArticleSliderInterface> = ({
  name,
  slides,
  headline,
  slideType,
  searchCtaLabel,
  searchTags,
}) => {
  // const classes = useStyles();

  // @todo we should take presentationType from props;
  const getComponentName = (sliderType: string) => {
    sliderType = slideType.name.toLowerCase();
    if (sliderType.indexOf('hero') >= 0) return 'hero';
    if (sliderType.indexOf('tile') >= 0) return 'tile';
    if (sliderType.indexOf('stacker') >= 0) return 'stacker';

    return 'default';
  };
  const componentName = getComponentName(slideType);
  const Component = componentMap[componentName];

  return (
    <section className={classNames('classes.section', componentName)}>
      <div className={classNames('container', 'pad0')}>
        <Component
          {...{ name, slides, headline, searchCtaLabel, searchTags }}
        />
      </div>
    </section>
  );
};

export default SanityArticleSlider;
