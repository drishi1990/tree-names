import React, { FunctionComponent } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import SiteNavigation from '../Navigation';
import SiteSearch from './search';
import NewsletterFollow from './newsletter-follow';
import styles from './header.module.scss';

const Header: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query brandSocialLinks {
      brandInfo: sanityBrandInfo {
        pinteresturl
        twitterurl
        youtubeurl
        facebookurl
        instaurl
      }
    }
  `);

  return (
    <header className={styles.header} role="banner" aria-label="header">
      <div className="container">
        <div className={styles.headerContentWrapper}>
          <div className={styles.logo}>
            <Link className={styles.logoLink} to="/">
              Beauty <span>Portal</span>
            </Link>
          </div>
          <SiteNavigation />
          <NewsletterFollow
            label={'Subscribe to our newsletter'}
            links={data.brandInfo}
          />
          <SiteSearch />
        </div>
      </div>
    </header>
  );
};

export default Header;
