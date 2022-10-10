import { PostsList } from './components/PostsList'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer className="container">
      <ProfileCard />
      <SearchForm />
      <PostsList />
    </HomeContainer>
  )
}
