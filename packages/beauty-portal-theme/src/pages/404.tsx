import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/Seo';
import Layout from '../components/Layout';
import styles from '../styles/notFound.module.scss';

export const query = graphql`
  query NotFoundPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const NotFound = ({ data: { site } }: NotFoundProps) => {
  return (
    <Layout>
      <SEO
        lang={'en-us'}
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <div className="container">
        <div className={styles.wrapper}>
          <p className={styles.title}>404</p>
          <p className={styles.subTitle}>That’s an error!</p>
          <p>
            404 Unfortunately, there is no such page on the site. Let us know
            what you are looking for and we will answer.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

interface NotFoundProps {
  data: {
    site: any;
  };
}
