import React, { FunctionComponent } from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import styles from './styles.module.scss';

const BeforeAndAfter: FunctionComponent = ({ images }) => {
  const { beforeImage, afterImage, alt } = images;
  return (
    <div className={styles.wrapper}>
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={`${beforeImage.asset.url}?w=600&h=400&auto=format&fit=crop`}
            alt={alt}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={`${afterImage.asset.url}?w=600&h=400&auto=format&fit=crop`}
            alt={alt}
          />
        }
        position={90}
      />
    </div>
  );
};

export default BeforeAndAfter;
