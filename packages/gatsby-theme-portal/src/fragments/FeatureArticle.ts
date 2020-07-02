import { graphql } from 'gatsby';

export const query1 = graphql`
  fragment FeatureFieldsFull on SanityFeatureArticle {
    _type
    _rawFeatureBody(resolveReferences: { maxDepth: 10 })
    _rawHeroImage(resolveReferences: { maxDepth: 10 })
    _rawHeroVideo(resolveReferences: { maxDepth: 10 })
    subheading
    path
    slug {
      current
    }
    heroVideo {
      url
      youTubeCaption
      heroImage {
        alt
        asset {
          localFile {
            childImageSharp {
              fluid(
                toFormat: JPG
                jpegProgressive: true
                jpegQuality: 70
                maxHeight: 400
                maxWidth: 712
              ) {
                src
              }
            }
          }
        }
      }
    }
    heroImage {
      alt
      asset {
        label
        title
        url
        metadata {
          dimensions {
            height
            width
          }
        }
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcSetWebp
          srcWebp
        }
        localFile {
          childImageSharp {
            fluid(toFormat: JPG, jpegProgressive: true, jpegQuality: 70) {
              src
            }
          }
        }
      }
    }
    headline
    seo {
      metaDescription
      metaKeywords
      metaTitle
    }
    author {
      name
      slug {
        current
      }
      image {
        alt
        asset {
          fluid(maxWidth: 50, maxHeight: 50) {
            aspectRatio
            base64
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
      }
    }
    id
    publishedAt(formatString: "MMMM D, YYYY")
    _createdAt(formatString: "MMMM D, YYYY")
    _updatedAt(formatString: "MMMM D, YYYY")
    tags {
      name
      tagCategory {
        name
      }
    }
    readnext {
      ... on SanityGalleryArticle {
        headline
        path
        slug {
          current
        }
        _type
        heroImage {
          alt
          asset {
            fluid(maxWidth: 350, maxHeight: 212) {
              aspectRatio
              base64
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
      ... on SanityFeatureArticle {
        headline
        path
        slug {
          current
        }
        _type
        heroImage {
          alt
          asset {
            fluid(maxWidth: 350, maxHeight: 212) {
              aspectRatio
              base64
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
      ... on SanityHowToArticle {
        headline
        path
        slug {
          current
        }
        _type
        heroImage {
          alt
          asset {
            fluid(maxWidth: 350, maxHeight: 212) {
              aspectRatio
              base64
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
    }
  }
`;

export const query2 = graphql`
  fragment FeatureFieldsTile on SanityFeatureArticle {
    headline
    subheading
    path
    slug {
      current
    }
    heroVideo {
      url
      youTubeCaption
      heroImage {
        alt
        asset {
          localFile {
            childImageSharp {
              fluid(
                toFormat: JPG
                jpegProgressive: true
                jpegQuality: 70
                maxHeight: 400
                maxWidth: 712
              ) {
                src
              }
            }
          }
        }
      }
    }
    _type
    id
    _rawHeroImage(resolveReferences: { maxDepth: 10 })
    heroImage {
      alt
      asset {
        url
        fluid(maxWidth: 175, maxHeight: 175) {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcSetWebp
          srcWebp
        }
      }
    }
  }
`;
