import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { urlFor } from '../../helpers/imageUrl';
import BlockContent from '@sanity/block-content-to-react';
import { ImageBlockInterface } from './models';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';

import styles from './styles.module.scss';

const ImageBlock: FunctionComponent<ImageBlockInterface> = ({
  name,
  image,
  _rawTextBlockBody,
  _rawImage,
  url,
  imageBlockType,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });
  const getComponentvariant = type => {
    return type
      .replace(/\s/g, '')
      .trim()
      .toLowerCase();
  };
  const Image = (
    <div className={'c-image'} ref={ref} data-inview={inView}>
      <figure>
        {inView ? (
          <>
            <link
              rel="preload"
              as="image"
              href={`${urlFor(_rawImage)
                .width(559)
                .height(314)
                .quality(80)
                .fit('max')
                .auto('format')
                .url()
                .toString()}`}
            />
            <picture>
              <source
                media="screen and (min-width: 560px)"
                srcSet={`${urlFor(_rawImage)
                  .width(752)
                  .height(422)
                  .quality(80)
                  .fit('max')
                  .auto('format')
                  .url()
                  .toString()}`}
              />
              <source
                media="screen and (min-width: 320px)"
                srcSet={`${urlFor(_rawImage)
                  .width(559)
                  .height(314)
                  .quality(80)
                  .fit('max')
                  .auto('format')
                  .url()
                  .toString()}`}
              />
              <img
                src={urlFor(_rawImage)
                  .width(752)
                  .height(422)
                  .fit('max')
                  .url()}
                alt={image.alt}
              />
            </picture>
          </>
        ) : null}
      </figure>
    </div>
  );

  return (
    <section
      className={classNames(
        styles.section,
        getComponentvariant(imageBlockType.name) === 'imageblocktypeb'
          ? styles.imageblocktypeb
          : null
      )}
    >
      <div className="bp-container">
        <Link to={url || '/'} className={styles.link}>
          <div className={styles.content}>
            <div className={classNames(styles.imageWrapper)}>{Image}</div>
            <div className={classNames(styles.copyText)}>
              <h2 className={styles.sectionTitle}>
                <span>{name}</span>
              </h2>
              {_rawTextBlockBody && (
                <BlockContent
                  serializers={blockTypeDefaultSerializers}
                  blocks={_rawTextBlockBody}
                />
              )}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ImageBlock;
