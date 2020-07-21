import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { urlFor } from '../../helpers/imageUrl';
import BlockContent from '@sanity/block-content-to-react';
import { ImageBlockInterface } from './models';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';

import './styles.scss';

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
    rootMargin: '0px 0px',
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
                .width(752)
                .height(422)
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
                  .quality(80)
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
        'bp-imageBlock',
        getComponentvariant(imageBlockType.name) === 'imageblocktypeb'
          ? 'typeb'
          : null
      )}
    >
      <div className="bp-container">
        <Link to={url || '/'} className="bp-imageBlock_link">
          <div className="bp-imageBlock_content">
            <div className="bp-imageBlock_image">{Image}</div>
            <div className="bp-imageBlock_copy">
              <h2 className="bp-imageBlock_title">
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
