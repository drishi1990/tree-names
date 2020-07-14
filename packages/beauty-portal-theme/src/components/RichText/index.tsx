import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import styles from './styles.module.scss';

const ArticleBodyBlockContent: FunctionComponent<ArticleBodyBlockContentProps> = ({
  data,
}) => {
  return (
    <section className={classNames('c-richtext', styles.richText)}>
      <BlockContent
        blocks={data}
        serializers={blockTypeDefaultSerializers}
        className={'hello'}
      />
    </section>
  );
};

export default ArticleBodyBlockContent;

interface ArticleBodyBlockContentProps {
  data: any;
}
