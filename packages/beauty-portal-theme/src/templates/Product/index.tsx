import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../../components/Seo';
import Layout from '../../components/Layout';
import useStyles from './styles';

const ProductPage = (props: ProductPageProps) => {
  const {
    data: {
      page,
      products: { nodes: productNodes },
    },
  } = props;

  const classes = useStyles();
  page.seo = page.seo || {};

  return (
    <Layout>
      <SEO
        lang={'en-us'}
        title={page.seo.metaTitle}
        description={page.seo.metaDescription}
        keywords={page.seo.metaKeywords}
      />
      <div className="col-container">
        <div className="col col-7">
          <h2>{page.name}</h2>
          <section>
            <div>{page.subheading}</div>
            <Img fluid={page.image.asset.fluid} alt={page.image.alt} />
          </section>
        </div>
        <div className="col col-1"></div>
        <div className="col col-4">
          {productNodes.map(item => (
            <Paper className={classes.paper} key={item.name + item.id}>
              <Link to={item.path}>{item.name}</Link>
            </Paper>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;

export const query = graphql`
  query($slug: String!) {
    products: allSanityProduct {
      nodes {
        ...ProductFieldsTile
      }
    }
    page: sanityProduct(id: { eq: $slug }) {
      ...ProductFieldsFull
    }
  }
`;

interface ProductPageProps {
  data: {
    page: any;
    products: any;
  };
  pageContext: {
    slug: string;
    title: string;
  };
}
