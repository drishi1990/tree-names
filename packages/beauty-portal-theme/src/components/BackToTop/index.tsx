import React, { FunctionComponent, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as ArrowUp } from '../../images/icons/up.svg';
import styles from './styles.module.scss';

const BackToTop: FunctionComponent = () => {
  const [isHidden, setIsHidden] = useState(true);

  const onScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setIsHidden(top <= 250);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isHidden]);

  const handleClick = (event: any) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      href="#top"
      className={classNames(
        styles.element,
        isHidden ? styles.isHidden : styles.isActive
      )}
      onClick={handleClick}
    >
      <ArrowUp />
      <span className="srOnly">Top</span>
    </a>
  );
};

export default BackToTop;
