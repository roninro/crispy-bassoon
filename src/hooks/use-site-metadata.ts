// @flow strict
import { useStaticQuery, graphql } from 'gatsby';
import { SiteContent } from '../types';

const useSiteMetadata:  ()=> SiteContent = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            menu {
              label
              path
            }
            url
            title
            subtitle
            copyright
            giscus {
              repo
              repoId
              category
              categoryId
              mapping
              reactionsEnabled
              emitMetadata
              theme
            }
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
