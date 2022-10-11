import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { IssuePostCard } from './components/IssuePostCard'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, PostsListContainer } from './styles'

const githubUser = import.meta.env.VITE_GITHUB_USER
const githubRepo = import.meta.env.VITE_GITHUB_REPO

export interface Issues {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Home() {
  const [issues, setIssues] = useState<Issues[]>([])

  const fetchIssues = useCallback(async () => {
    const response = await api.get('/search/issues', {
      params: {
        q: `repo:${githubUser}/${githubRepo}`,
      },
    })

    setIssues(response.data.items)
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <HomeContainer className="container">
      <ProfileCard />
      <SearchForm />

      <PostsListContainer>
        {issues.map((issue) => (
          <IssuePostCard key={issue.number} issue={issue} />
        ))}
      </PostsListContainer>
    </HomeContainer>
  )
}
