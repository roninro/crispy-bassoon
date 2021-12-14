import { Link } from "gatsby"
import { useRecentPosts } from "../../hooks"
import Card from "./card"

export const RecentPosts = () => {
  const nodes = useRecentPosts()

  return (
    <Card title="Recent Posts">
      <ul>
        {nodes.map(node => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}
