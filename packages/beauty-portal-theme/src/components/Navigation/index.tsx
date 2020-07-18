import React, { FunctionComponent, useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import classNames from 'classnames';

import './styles.scss';

const SiteNavigation: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query siteNavigation {
      sanityNavBar(name: { eq: "Header" }) {
        navItems {
          navL1 {
            landingPage {
              name
              path
              slug {
                current
              }
            }
            name
            path
          }
          navL2 {
            landingPage {
              name
              path
              slug {
                current
              }
            }
            name
            path
          }
        }
      }
    }
  `);

  const [activeNav, setActiveNav] = useState(false);
  const handleNav = event => {
    event.currentTarget.classList.toggle('is-active');
    setActiveNav(!activeNav);
  };

  const getUrl = (navItem: NavItemInterface) => {
    let url;
    if (navItem.path) {
      url = navItem.path;
    } else if (navItem.landingPage) {
      url = navItem.landingPage.path;
    } else {
      url = '#';
    }

    return url;
  };

  return (
    <React.Fragment>
      <button className="bp-nav_toggle" type="button" onClick={handleNav}>
        <span className="srOnly">Toggle Navigation</span>
        <div aria-hidden="true" className="bp-nav_toggle-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className={classNames('bp-nav', activeNav ? 'is-active' : null)}
      >
        <span className="srOnly">Primary Navigation</span>
        <div className="bp-nav_content" id="nav">
          <ul className="bp-nav_items">
            {data.sanityNavBar.navItems.map(
              (
                navItem: {
                  navL1: NavItemInterface;
                  navL2: [NavItemInterface];
                },
                index: number
              ) => (
                <li className="bp-nav_item" key={navItem.navL1.name}>
                  <a href={getUrl(navItem.navL1)} className="bp-nav_link">
                    {navItem.navL1.name}
                    {navItem.navL2.length ? (
                      <span aria-hidden="true" className="bp-nav_icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          svg-inline=""
                          role="presentation"
                          focusable="false"
                        >
                          <path d="M0 6a.5.5 0 01.853-.354l8.646 8.646 8.646-8.646a.5.5 0 01.707.707l-9 9a.5.5 0 01-.707 0l-9-9a.498.498 0 01-.146-.354z"></path>
                        </svg>
                      </span>
                    ) : null}
                  </a>
                  {navItem.navL2.length ? (
                    <div className="bp-nav_subnav">
                      <ul className="bp-nav_subnav-items">
                        {navItem.navL2.map((navItem: any) => (
                          <li key={navItem.name}>
                            <Link
                              tabIndex="0"
                              to={getUrl(navItem)}
                              className="bp-nav_subnav-link"
                            >
                              {navItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

interface NavItemInterface {
  name: string;
  path: string;
  landingPage?: {
    name: string;
    path: string;
    slug: {
      current: string;
    };
  };
}
export default SiteNavigation;
