import { PostHeader } from './PostHeader'
import { PostMainContent } from './PostMainContent'
import { PostContainer } from './styles'

export function Post() {
  return (
    <PostContainer className="container">
      <PostHeader />
      <PostMainContent />
    </PostContainer>
  )
}
