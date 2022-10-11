import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { PostIssues } from '../..'
import {
  Info,
  InfoContainer,
  LinksContainer,
  PostHeaderContainer,
} from './styles'

interface PostHeaderProps {
  issue: PostIssues
}

export function PostHeader({ issue }: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <LinksContainer>
        <NavLink to={'/'} className="link">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Back</span>
        </NavLink>

        <a
          href={issue.html_url}
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <span>github</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </LinksContainer>

      <h1>{issue.title}</h1>

      <InfoContainer>
        <Info>
          <FontAwesomeIcon icon={faGithub} className="info-icon" />
          <span>{issue.login}</span>
        </Info>

        <Info>
          <FontAwesomeIcon icon={faCalendarDay} className="info-icon" />
          <span>{issue.created_at}</span>
        </Info>

        <Info>
          <FontAwesomeIcon icon={faComment} className="info-icon" />
          <span>{issue.comments} comments</span>
        </Info>
      </InfoContainer>
    </PostHeaderContainer>
  )
}
