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
import { api } from '../../../../lib/axios'
import { useCallback, useEffect, useState } from 'react'

interface User {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string
  bio: string
  followers: number
}

const githubUser = import.meta.env.VITE_GITHUB_USER

export function ProfileCard() {
  const [user, setUser] = useState<User>({} as User)

  const fetchUserData = useCallback(async () => {
    const response = await api.get(`/users/${githubUser}`)

    setUser(response.data)
  }, [])

  useEffect(() => {
    fetchUserData()
  }, [fetchUserData])

  return (
    <ProfileCardContainer>
      <img src={user.avatar_url} alt="" />

      <div>
        <ProfileCardHeader>
          <h1>{user.name}</h1>
          <a
            href={user.html_url}
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

        <BioParagraph>{user.bio}</BioParagraph>

        <InfoContainer>
          <Info>
            <FontAwesomeIcon icon={faGithub} className="info-icon" />
            <span>{user.login}</span>
          </Info>

          <Info>
            <FontAwesomeIcon icon={faBuilding} className="info-icon" />
            <span>{user.company === null ? 'not informed' : user.company}</span>
          </Info>

          <Info>
            <FontAwesomeIcon icon={faUserGroup} className="info-icon" />
            <span>{user.followers} followers</span>
          </Info>
        </InfoContainer>
      </div>
    </ProfileCardContainer>
  )
}
