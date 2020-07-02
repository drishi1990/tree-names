import React from 'react';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import BlockContent from '@sanity/block-content-to-react';
import Video from '../components/Video';
import Product from '../components/Product';
import classNames from 'classnames';
import { urlFor } from '../helpers/imageUrl';
import { sanityConfig } from '../helpers/sanityConfig';

export const blockTypeDefaultSerializers = {
  types: {
    beforeAfterImage: ({ node }) => {
      return <BeforeAndAfter images={node} />;
    },
    figure: ({ node }) => {
      return (
        <div className={'c-image'}>
          <figure>
            <picture>
              <source
                media="screen and (min-width: 1025px)"
                srcSet={`${urlFor(node)
                  .width(712)
                  .fit('max')
                  .url()
                  .toString()}`}
              />
              <img
                src={urlFor(node)
                  .width(562)
                  .fit('max')
                  .url()}
                alt={node.alt}
                width="562"
              />
            </picture>
          </figure>
          <div className={'c-image__credit'}>
            <span>{node.imageCaption}</span>
            <span>{node.imageCredit}</span>
          </div>
        </div>
      );
    },
    step: ({
      node: { directions, imageName, instructionName, stepNumber },
    }) => {
      return (
        <div className={classNames(stepNumber ? 'c-step__reset' : 'c-step')}>
          <BlockContent blocks={instructionName} />
          <BlockContent blocks={directions} />
          <figure>
            <picture>
              <source
                media="screen and (max-width: 1024px)"
                srcSet={`${urlFor(imageName)
                  .width(484)
                  .fit('max')
                  .url()
                  .toString()} 1x`}
              />
              <source
                media="screen and (min-width: 1025px)"
                srcSet={`${urlFor(imageName)
                  .width(612)
                  .fit('max')
                  .url()
                  .toString()} 1x`}
              />
              <img
                src={urlFor(imageName)
                  .width(612)
                  .fit('max')
                  .url()}
                alt={imageName.alt}
                width="612"
                height="621"
              />
            </picture>
          </figure>
        </div>
      );
    },
    productReference: props => {
      const node = props.node;

      if (!node.product) {
        return null;
      }

      const fluidProps = getFluidGatsbyImage(
        node.product.image.asset._id,
        { maxWidth: 250 },
        sanityConfig
      );
      return <Product image={fluidProps} metadata={node.product} />;
    },
    // eslint-disable-next-line react/display-name
    youTube: props => {
      return <Video videoMetaData={props} sanityConfig={sanityConfig} />;
    },
    block: props => {
      const { style = 'normal' } = props.node;
      if (style === 'blockquote') {
        return (
          <blockquote>
            <p>
              {props.children.map(element => {
                return <span key={element}>{element}</span>;
              })}
            </p>
          </blockquote>
        );
      }

      // Fall back to default handling
      return BlockContent.defaultSerializers.types.block(props);
    },
  },
};
