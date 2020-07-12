import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { ReactComponent as Search } from '../../images/icons/search.svg';
import styles from './header.module.scss';

const SiteSearch: FunctionComponent = () => {
  return (
    <div className={styles.siteSearch}>
      <Link to="/search-results" className={styles.searchButton}>
        <Search />
        <span className="srOnly">Search</span>
      </Link>
    </div>
  );
};

export default SiteSearch;
