import { Issues } from '../..'
import { formatCreatedAtDate } from '../../../../utils/fomatDate'
import { PostItem } from './styles'

interface IssueProps {
  issue: Issues
}

export function IssuePostCard({ issue }: IssueProps) {
  const formattedCreatedAt = formatCreatedAtDate(issue.created_at)

  return (
    <PostItem to={`/issue/${issue.number}`} key={issue.number}>
      <header>
        <h2>{issue.title}</h2>
        <span>{formattedCreatedAt}</span>
      </header>

      <p>{issue.body}</p>
    </PostItem>
  )
}
