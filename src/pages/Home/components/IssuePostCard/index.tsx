import { Issues } from '../..'
import { PostItem } from './styles'

interface IssueProps {
  issue: Issues
}

export function IssuePostCard({ issue }: IssueProps) {
  return (
    <PostItem to={`/issue/${issue.number}`} key={issue.number}>
      <header>
        <h2>{issue.title}</h2>
        <span>{issue.created_at}</span>
      </header>

      <p>{issue.body}</p>
    </PostItem>
  )
}
