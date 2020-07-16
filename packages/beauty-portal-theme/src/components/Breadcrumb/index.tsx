import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { getSearchUrl } from '../../helpers/searchUrl';
import styles from './styles.module.scss';

const Breadcrumb: FunctionComponent<BreadcrumbInterface> = ({
  tag,
  pageTitle,
  searchResultPath,
}) => {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link to={'/'} className={styles.link}>
              Home
            </Link>
          </li>
          <li className={styles.divider} aria-hidden="true">
            /
          </li>
          {tag && (
            <>
              <li className={styles.item}>
                <Link
                  to={getSearchUrl(
                    searchResultPath,
                    tag.tagCategory.name,
                    'tags.tagCategory.name'
                  )}
                  className={styles.link}
                >
                  {tag.tagCategory.name}
                </Link>
              </li>
              <li className={styles.divider} aria-hidden="true">
                /
              </li>
              <li className={styles.item}>
                <Link
                  to={getSearchUrl(searchResultPath, tag.name, 'tags.name')}
                  className={styles.link}
                >
                  {tag.name}
                </Link>
              </li>
              <li className={styles.divider} aria-hidden="true">
                /
              </li>
            </>
          )}
          <li className={classNames(styles.item, styles.active)}>
            {pageTitle}
          </li>
        </ul>
      </div>
    </section>
  );
};

interface BreadcrumbInterface {
  tag?: any;
  pageTitle: string;
  searchResultPath?: string;
}

export default Breadcrumb;
