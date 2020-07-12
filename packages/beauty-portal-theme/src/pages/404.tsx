import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/Seo';
import Layout from '../components/Layout';

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  font-size: 20rem;
  line-height: 1;
  font-weight: 600;
  margin: 0;
  margin-bottom: 16px;
`;
const SubTitle = styled.p`
  font-size: 2rem;
  line-height: 1;
  font-weight: 600;
  margin: 0;
  margin-bottom: 16px;
`;

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     wrapper: {
//       padding: theme.spacing(8),
//       display: 'flex',
//       justifyContent: 'center',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     '@keyframes animate': {
//       '0%': {
//         backgroundPosition: 'left 0px top 30%',
//       },
//       '40%': {
//         backgroundPosition: 'left 800px top 30%',
//       },
//     },
//     title: {
//       fontSize: '20rem',
//       lineHeight: 1,
//       fontWeight: 600,
//       margin: 0,
//       marginBottom: theme.spacing(2),
//       backgroundImage: 'url(/textclip.jpg)',
//       '-webkitBackgroundClip': () => `${'text'}`,
//       textFillColor: 'transparent',
//       animation: `$animate 15s linear infinite`,
//     },
//     subTitle: {
//       fontSize: '2rem',
//       lineHeight: 1,
//       fontWeight: 600,
//       margin: 0,
//       marginBottom: theme.spacing(2),
//     },
//   })
// );

export const query = graphql`
  query NotFoundPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const NotFound = ({ data: { site } }: NotFoundProps) => {
  // const classes = useStyles();
  return (
    <Layout>
      <SEO
        lang={'en-us'}
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <div className="container">
        <Wrapper>
          <Title>404</Title>
          <SubTitle>That’s an error!</SubTitle>
          <p>
            404 Unfortunately, there is no such page on the site. Let us know
            what you are looking for and we will answer.
          </p>
        </Wrapper>
      </div>
    </Layout>
  );
};

export default NotFound;

interface NotFoundProps {
  data: {
    site: any;
  };
}
