import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import {
  Info,
  InfoContainer,
  LinksContainer,
  PostHeaderContainer,
} from './styles'

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <LinksContainer>
        <NavLink to={'/'} className="link">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Back</span>
        </NavLink>

        <a
          href={'https://github.com/martins-rafa'}
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <span>github</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </LinksContainer>

      <h1>JavaScript data types and data structures</h1>

      <InfoContainer>
        <Info>
          <FontAwesomeIcon icon={faGithub} className="info-icon" />
          <span>martins-rafa</span>
        </Info>

        <Info>
          <FontAwesomeIcon icon={faCalendarDay} className="info-icon" />
          <span>2 days ago</span>
        </Info>

        <Info>
          <FontAwesomeIcon icon={faComment} className="info-icon" />
          <span>5 comments</span>
        </Info>
      </InfoContainer>
    </PostHeaderContainer>
  )
}
