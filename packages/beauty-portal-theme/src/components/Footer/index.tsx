import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SocialMenu from '../SocialMenu';
import styles from './styles.module.scss';
import BackToTop from '../BackToTop';
import { ReactComponent as UnileverLogo } from '../../images/unilever-logo.svg';
import { ReactComponent as NewWindow } from '../../images/icons/launch.svg';

const Footer: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query footerNavigation {
      sanityNavBar(name: { eq: "Footer" }) {
        navItems {
          navL1 {
            name
            path
            externalLink
          }
        }
      }
      brandInfo: sanityBrandInfo {
        pinteresturl
        twitterurl
        youtubeurl
        facebookurl
        instaurl
      }
    }
  `);

  const externalLinkAttributes = {
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return (
    <footer className={styles.footer} role="contentinfo" aria-label="footer">
      <div className={styles.social}>
        <SocialMenu links={data.brandInfo} />
      </div>
      <nav
        className={styles.wrapper}
        role="navigation"
        aria-label="Footer Navigation"
      >
        <ul className={styles.navigationItems}>
          {data.sanityNavBar.navItems.map(
            (navItem: {
              navL1: { name: string; path: string; externalLink: string };
            }) => (
              <li className={styles.navigationItem} key={navItem.navL1.name}>
                <a
                  href={
                    navItem.navL1.externalLink ||
                    navItem.navL1.path ||
                    `/${navItem.navL1.name}`
                  }
                  className={styles.navigationLink}
                  {...(navItem.navL1.externalLink
                    ? externalLinkAttributes
                    : null)}
                >
                  {navItem.navL1.name}
                  {navItem.navL1.externalLink && <NewWindow />}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
      <div className={styles.footerSecondary}>
        <UnileverLogo />
        <p>Copyright &copy; {new Date().getFullYear()} Unilever.</p>
      </div>
      <BackToTop />
    </footer>
  );
};

export default Footer;
