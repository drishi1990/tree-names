import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { getSearchUrl } from '../../helpers/searchUrl';
import useStyles from './styles';

const Breadcrumb: FunctionComponent<BreadcrumbInterface> = ({
  tag,
  pageTitle,
  searchResultPath,
}) => {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
      <div className="container">
        <div className="">
          <ul className={classes.items}>
            <li className={classes.item}>
              <Link to={'/'} className={classes.link}>
                Home
              </Link>
            </li>
            {tag && (
              <>
                <li className={classes.divider} aria-hidden="true">
                  /
                </li>
                <li className={classes.item}>
                  <Link
                    to={getSearchUrl(
                      searchResultPath,
                      tag.tagCategory.name,
                      'tags.tagCategory.name'
                    )}
                    className={classes.link}
                  >
                    {tag.tagCategory.name}
                  </Link>
                </li>
                <li className={classes.divider} aria-hidden="true">
                  /
                </li>
                <li className={classes.item}>
                  <Link
                    to={getSearchUrl(searchResultPath, tag.name, 'tags.name')}
                    className={classes.link}
                  >
                    {tag.name}
                  </Link>
                </li>
                <li className={classes.divider} aria-hidden="true">
                  /
                </li>
              </>
            )}
            <li className={classNames(classes.item, classes.active)}>
              {pageTitle}
            </li>
          </ul>
        </div>
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
