import React, { ReactNode } from 'react';
import classNames from 'classnames';
// import { ThemeProvider } from '@material-ui/core/styles';
// import theme from '../theme';
import Header from '../Header';
import Footer from '../Footer';
import PageSchema from '../PageSchema';
import styles from './styles.module.scss';

const Layout = ({ className, children }: LayoutProps) => {
  return (
    <React.Fragment>
      {/* <ThemeProvider theme={theme}> */}
      <a href="#main" className={styles.skipLink}>
        <span>Skip to content</span>
      </a>
      <Header />
      <PageSchema type={'WebSite'} />
      <main
        id="main"
        role="main"
        aria-label="Main Content"
        className={classNames(
          styles.mainContentWrapper,
          className === 'home' ? 'pad0' : null
        )}
      >
        {children}
      </main>
      <Footer />
      {/* </ThemeProvider> */}
    </React.Fragment>
  );
};

export default Layout;

interface LayoutProps {
  children?: ReactNode | ReactNode[];
  className?: string;
}
