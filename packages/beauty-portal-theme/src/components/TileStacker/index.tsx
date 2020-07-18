import React, { FunctionComponent } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { TileStackerInterface } from './models';
import { ReactComponent as PlayVideo } from '../../images/icons/play.svg';
import './styles.scss';

const TileStacker: FunctionComponent<TileStackerInterface> = ({
  slides,
  headline,
}) => {
  const renderer = slide => {
    return (
      <div className="col-container">
        <div className="col col-4">
          <div key={slide.headline}>
            <div className="bp-tileStacker-item">
              <span className="bp-tileStacker_type">{slide._type}</span>
              <Link className="bp-tileStacker_link" to={slide.path}>
                {slide.heroImage && (
                  <div className="bp-tileStacker_image">
                    <Img
                      fluid={slide.heroImage.asset.fluid}
                      alt={slide.heroImage.alt}
                      style={{ height: '237px' }}
                      imgStyle={{ objectPosition: 'top center' }}
                    />
                    {slide.heroVideo && (
                      <span className="icon-play">
                        <PlayVideo />
                        <span hidden>Play Video</span>
                      </span>
                    )}
                  </div>
                )}
                <h3 className="bp-tileStacker_headline">
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
    <div className="bp-tileStacker">
      <div className="bp-tileStacker_header">
        <h2 className="bp-tileStacker_title">{headline}</h2>
      </div>
      <div className="col col-3">{slides.map(slide => renderer(slide))}</div>
    </div>
  );
};

export default TileStacker;
