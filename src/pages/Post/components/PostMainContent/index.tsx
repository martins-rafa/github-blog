import { PostMainContentContainer } from './styles'

interface PostMainContentProps {
  content: string
}

export function PostMainContent({ content }: PostMainContentProps) {
  return (
    <PostMainContentContainer>
      <p>{content}</p>
    </PostMainContentContainer>
  )
}
