import React, { FunctionComponent } from 'react';
import { useInView } from 'react-intersection-observer';
import Img from 'gatsby-image';
import classNames from 'classnames';
import { ReactComponent as Comb } from '../../images/icons/comb.svg';
import { ReactComponent as Clip } from '../../images/icons/clip.svg';
import { ReactComponent as Wand } from '../../images/icons/wand.svg';
import { ReactComponent as Elastic } from '../../images/icons/elastic.svg';
import { ReactComponent as Dryer } from '../../images/icons/dryer.svg';
import { ReactComponent as Ironer } from '../../images/icons/ironer.svg';
import { ReactComponent as Pins } from '../../images/icons/pins.svg';
import styles from './styles.module.scss';

const ToolList: FunctionComponent<ToolListInterface> = ({ data, title }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-150px 0px',
  });

  return (
    <section className={styles.section} ref={ref}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className="col-container">
        {data &&
          data.map(tool => (
            <div
              className={classNames('col col-xs-3', styles.gridItem)}
              key={tool.name}
            >
              {tool.image ? (
                <div>
                  <Img fluid={tool.image.asset.fluid} alt={tool.image.alt} />
                </div>
              ) : (
                <div
                  className={classNames(
                    styles.icon,
                    inView ? styles.inView : null
                  )}
                >
                  {/* TODO: Dynamically call component based on toolname */}
                  {tool.name.indexOf('Comb') >= 0 && <Comb />}
                  {tool.name.indexOf('Clip') >= 0 && <Clip />}
                  {tool.name.indexOf('Elastic') >= 0 && <Elastic />}
                  {tool.name.indexOf('Dryer') >= 0 && <Dryer />}
                  {tool.name.indexOf('Pins') >= 0 && <Pins />}
                  {tool.name.indexOf('Ironer') >= 0 && <Ironer />}
                  {tool.name.indexOf('Wand') >= 0 && <Wand />}
                </div>
              )}
              <h3 className={styles.gridItemCaption}>{tool.name}</h3>
            </div>
          ))}
      </div>
    </section>
  );
};

interface ToolListInterface {
  data: any;
  title: string;
}
export default ToolList;
