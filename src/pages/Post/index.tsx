import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { PostHeader } from './components/PostHeader'
import { PostMainContent } from './components/PostMainContent'
import { PostContainer } from './styles'

const githubUser = import.meta.env.VITE_GITHUB_USER
const githubRepo = import.meta.env.VITE_GITHUB_REPO

export interface PostIssues {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  login: string
}

export function Post() {
  const [issueData, setIssueData] = useState<PostIssues>({} as PostIssues)

  const { id } = useParams()

  const fetchPostIssue = useCallback(async () => {
    const response = await api.get(
      `/repos/${githubUser}/${githubRepo}/issues/${id}`,
    )

    const userLogin = response.data.user.login
    const userData = {
      login: userLogin,
      ...response.data,
    }

    setIssueData(userData)
  }, [id])

  useEffect(() => {
    fetchPostIssue()
  }, [fetchPostIssue])

  return (
    <PostContainer className="container">
      <PostHeader issue={issueData} />
      <PostMainContent content={issueData.body} />
    </PostContainer>
  )
}
