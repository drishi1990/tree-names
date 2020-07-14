import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Form: FunctionComponent<FormProps> = ({ children, onsubmit }) => {
  return (
    <form
      className={classNames('c-form', 'classes.formWrapper')}
      action="/subscribe"
      method="post"
      id="subscribe"
      onSubmit={onsubmit}
      noValidate
    >
      {children}
    </form>
  );
};

export default Form;

interface FormProps {
  children: any;
  onsubmit: any;
}
