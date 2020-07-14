import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { urlFor } from '../../helpers/imageUrl';
import { ReactComponent as IconBuy } from '../../images/icons/buy.svg';
import styles from './styles.module.scss';

const Product: FunctionComponent<ProductInterface> = ({ metadata, data }) => {
  const {
    slug,
    image: { alt },
    buyNow,
    tagLine,
    name,
  } = metadata;
  const { image } = data;

  return (
    <div className={styles.wrapper}>
      <Link className={styles.link} to={(slug && slug.current) || '/'}>
        <div className={styles.image}>
          <figure>
            <picture>
              <source
                media="screen and (min-width: 1280px)"
                srcSet={`${urlFor(image)
                  .width(250)
                  .fit('max')
                  .auto('format')
                  .url()
                  .toString()}, ${urlFor(image)
                  .width(500)
                  .fit('max')
                  .auto('format')
                  .url()
                  .toString()} 2x`}
              />
              <img
                src={urlFor(image)
                  .width(250)
                  .fit('max')
                  .auto('format')
                  .url()}
                alt={alt}
              />
            </picture>
          </figure>
        </div>
        {tagLine && (
          <p className={styles.tagline}>
            <span>{tagLine}</span>
          </p>
        )}
        {name && (
          <h3 className={styles.name}>
            <span>{name}</span>
          </h3>
        )}
      </Link>
      {buyNow && (
        <a
          className={styles.buynow}
          href={buyNow}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.animateIcon}>
            <IconBuy />
            <span>Buy Now</span>
          </span>
        </a>
      )}
    </div>
  );
};

interface ProductInterface {
  metadata: any;
  data: any;
}
export default Product;
