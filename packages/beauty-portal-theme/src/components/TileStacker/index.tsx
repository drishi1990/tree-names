import React, { FunctionComponent } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { TileStackerInterface } from './models';
import { ReactComponent as PlayVideo } from '../../images/icons/play.svg';
import styles from './styles.module.scss';

const TileStacker: FunctionComponent<TileStackerInterface> = ({
  slides,
  headline,
}) => {
  const renderer = slide => {
    return (
      <div className="col-container">
        <div className="col col-4">
          <div key={slide.headline}>
            <div className={'classes.tile'}>
              <span className={'classes.slideType'}>{'slide._type'}</span>
              <Link className={'classes.sliderLink'} to={slide.path}>
                {slide.heroImage && (
                  <div className={'classes.heroImage'}>
                    <Img
                      fluid={slide.heroImage.asset.fluid}
                      alt={slide.heroImage.alt}
                      style={{ height: '237px' }}
                      imgStyle={{ objectPosition: 'top center' }}
                    />
                    {slide.heroVideo && (
                      <span className={`icon ${'classes.iconPlay'}`}>
                        <PlayVideo />
                        <span hidden>Play Video</span>
                      </span>
                    )}
                  </div>
                )}
                <h3 className={'classes.sliderItemCaption'}>
                  <span>{slide.headline}</span>
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={'classes.root'}>
      <div className={'classes.sectionTitle'}>
        <h2 className={'classes.sliderTitle'}>{headline}</h2>
      </div>
      <div className="col col-3">{slides.map(slide => renderer(slide))}</div>
    </div>
  );
};

export default TileStacker;
