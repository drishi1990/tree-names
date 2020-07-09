import React, { FunctionComponent } from 'react';
import Slider from '../Slider';
import { HeroSliderInterface } from './models';

const HeroSlider: FunctionComponent<HeroSliderInterface> = ({ slides }) => {
  return <Slider data={slides} />;
};

export default HeroSlider;
