import React, { FunctionComponent } from 'react';
import { SanityProductSliderInterface } from './models';
import TileSlider from '../TileSlider';

import styles from './styles.module.scss';

const SanityProductSlider: FunctionComponent<SanityProductSliderInterface> = ({
  name,
  slides,
  headline,
}) => {
  return (
    <section className={styles.section}>
      <div className="bp-container">
        <TileSlider name={name} slides={slides} headline={headline} />
      </div>
    </section>
  );
};

export default SanityProductSlider;
