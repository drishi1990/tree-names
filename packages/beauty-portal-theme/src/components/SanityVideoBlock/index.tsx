import React, { FunctionComponent } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { SanityVideoBlockInterface } from './models';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import { getYouTubeId } from '../../helpers/youtube';
import styles from './styles.module.scss';

const SanityVideoBlock: FunctionComponent<SanityVideoBlockInterface> = ({
  videoBlock,
  _rawTextBlockBody,
}) => {
  return (
    <section className={styles.section}>
      <div className="bp-container">
        <div className={styles.content}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${getYouTubeId(
              videoBlock.url
            )}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className={styles.copyText}>
            <h2 className={styles.sectionTitle}>{videoBlockName}</h2>
            {_rawTextBlockBody && (
              <BlockContent
                serializers={blockTypeDefaultSerializers}
                blocks={_rawTextBlockBody}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SanityVideoBlock;
