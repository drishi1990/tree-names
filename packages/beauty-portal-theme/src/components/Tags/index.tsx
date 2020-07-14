import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { getSearchUrl } from '../../helpers/searchUrl';
import styles from './styles.module.scss';

const Tags: FunctionComponent<TagsInterface> = ({
  data,
  searchResultPath,
  title,
}) => {
  const uniqueValues = (array: [], filter: string) => {
    return array.reduce((tag: any, current: any) => {
      const category = tag.find((item: any) =>
        filter === 'category'
          ? item.tagCategory.name === current.tagCategory.name
          : item.name === current.name
      );
      if (!category) {
        return tag.concat([current]);
      } else {
        return tag;
      }
    }, []);
  };

  return (
    <section className={styles.tags}>
      <h3 className={styles.tagsTitle}>{title}</h3>
      <ul className={styles.tagList}>
        {uniqueValues(data, 'category').map((tag: any) => (
          <li className={styles.tagListItem} key={tag.tagCategory.name}>
            <Link
              className={styles.tagsListLink}
              to={getSearchUrl(
                searchResultPath,
                tag.tagCategory.name,
                'tags.tagCategory.name'
              )}
            >
              {tag.tagCategory.name}
            </Link>
          </li>
        ))}
        {uniqueValues(data, 'tag').map((tag: any) => (
          <li className={styles.tagListItem} key={tag.name}>
            <Link
              className={styles.tagsListLink}
              to={getSearchUrl(searchResultPath, tag.name, 'tags.name')}
            >
              {tag.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

interface TagsInterface {
  data: any;
  searchResultPath?: string;
  title: string;
}
export default Tags;
