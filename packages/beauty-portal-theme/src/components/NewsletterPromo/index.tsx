import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import { NewsletterPromoInterface } from './models';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import styles from './styles.module.scss';

const NewsletterPromo: FunctionComponent<NewsletterPromoInterface> = ({
  _rawBody,
  ctaLabel,
}) => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletterContent}>
        {_rawBody && (
          <h3 className={styles.newsletterTitle}>
            <BlockContent
              serializers={blockTypeDefaultSerializers}
              blocks={_rawBody}
            />
          </h3>
        )}
        <Link to="/subscribe/" className={styles.subscribe}>
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
};

export default NewsletterPromo;
