import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <div>
        <h2>Posts</h2>
        <span>6 posts</span>
      </div>

      <form action="">
        <input type="text" placeholder="Search" />
      </form>
    </SearchFormContainer>
  )
}
