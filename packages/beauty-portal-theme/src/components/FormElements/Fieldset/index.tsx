import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import styles from '../styles.module.scss';

const Fieldset: FunctionComponent<FieldsetInterface> = ({
  children,
  legend,
}) => {
  return (
    <fieldset className={classNames('c-form__fielset', styles.fieldset)}>
      <legend className="srOnly">{legend}</legend>
      {children}
    </fieldset>
  );
};

export default Fieldset;

interface FieldsetInterface {
  legend: string;
  children: any;
}
