import { Link } from "gatsby"
import { useCategoriesList } from "../../hooks"
import Card from "./card"
import _ from "lodash"

export const Categories = () => {
  const groups = useCategoriesList()

  return (
    <Card title="Categories">
      <ul>
        {groups.map(group => (
          <li key={group.fieldValue}>
            <Link
              to={`/categories/${_.kebabCase(group.fieldValue)}`}
            >{`${group.fieldValue} (${group.totalCount})`}</Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}
