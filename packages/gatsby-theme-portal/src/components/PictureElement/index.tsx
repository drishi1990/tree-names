import React, { FunctionComponent } from 'react';
import useStyles from './styles';

const Picture: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <figure>
      <picture>
        <img src="" height="" width="" />
      </picture>
    </figure>
  );
};

export default Picture;
