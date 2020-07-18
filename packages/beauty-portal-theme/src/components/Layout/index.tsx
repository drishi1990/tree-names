import React, { ReactNode } from 'react';
import classNames from 'classnames';
import Header from '../Header';
import Footer from '../Footer';
import PageSchema from '../PageSchema';
import './styles.scss';

const Layout = ({ className, children }: LayoutProps) => {
  return (
    <>
      <a href="#main" className="bp-skipLink">
        <span>Skip to content</span>
      </a>
      <Header />
      <PageSchema type={'WebSite'} />
      <main
        id="main"
        role="main"
        aria-label="Main Content"
        className={classNames('bp-page', className === 'home' ? 'pad0' : null)}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

interface LayoutProps {
  children?: ReactNode | ReactNode[];
  className?: string;
}
