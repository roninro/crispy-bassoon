import Page from "@components/page"
import {
  LoopContainer,
  EntryStyle,
  EntryArticle,
  PostContainer,
} from "@components/styles"
import { useSiteMetadata } from "../hooks"
import IndexLayout from "../layouts"

const NotFoundTemplate = () => {
  const { title: siteTitle } = useSiteMetadata()

  const pageTitle = `${siteTitle} - 404`

  return (
    <IndexLayout>
      <Page title={pageTitle}>
        <LoopContainer>
          <EntryStyle>
            <EntryArticle>
              <PostContainer>
                <h3> 404 NOT Found </h3>
              </PostContainer>
            </EntryArticle>
          </EntryStyle>
        </LoopContainer>
      </Page>
    </IndexLayout>
  )
}

export default NotFoundTemplate
