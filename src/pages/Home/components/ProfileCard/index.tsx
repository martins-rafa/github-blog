import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  BioParagraph,
  Info,
  InfoContainer,
  ProfileCardContainer,
  ProfileCardHeader,
} from './styles'

import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <img src="https://avatars.githubusercontent.com/u/91082590?v=4" alt="" />

      <div>
        <ProfileCardHeader>
          <h1>Rafa Martins</h1>
          <a
            href="https://github.com/martins-rafa"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <span>github</span>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="github-icon"
            />
          </a>
        </ProfileCardHeader>

        <BioParagraph>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </BioParagraph>

        <InfoContainer>
          <Info>
            <FontAwesomeIcon icon={faGithub} className="info-icon" />
            <span>martins-rafa</span>
          </Info>

          <Info>
            <FontAwesomeIcon icon={faBuilding} className="info-icon" />
            <span>company</span>
          </Info>

          <Info>
            <FontAwesomeIcon icon={faUserGroup} className="info-icon" />
            <span>32 followers</span>
          </Info>
        </InfoContainer>
      </div>
    </ProfileCardContainer>
  )
}
