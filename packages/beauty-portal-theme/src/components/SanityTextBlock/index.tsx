import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { SanityTextBlockInterface } from './models';

import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import styles from './styles.module.scss';

const SanityTextBlock: FunctionComponent<SanityTextBlockInterface> = ({
  _rawTextBlockBody,
  textBlockType,
}) => {
  const getComponentvariant = type => {
    return type
      .replace(/\s/g, '')
      .trim()
      .toLowerCase();
  };
  return (
    <section
      className={classNames(
        styles.section,
        getComponentvariant(textBlockType.name) === 'textblock-type1'
          ? styles.type1
          : null
      )}
    >
      <div className="bp-container">
        <div className={styles.sectionDescription}>
          <BlockContent
            serializers={blockTypeDefaultSerializers}
            blocks={_rawTextBlockBody}
          />
        </div>
      </div>
    </section>
  );
};

export default SanityTextBlock;
