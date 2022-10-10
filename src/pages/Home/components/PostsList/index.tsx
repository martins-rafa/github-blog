import { PostItem, PostsListContainer } from './styles'

export function PostsList() {
  return (
    <PostsListContainer>
      <PostItem>
        <header>
          <h2>JavaScript data types and data structures</h2>
          <span>2 days ago</span>
        </header>

        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </PostItem>

      <PostItem>
        <header>
          <h2>JavaScript data types and data structures</h2>
          <span>2 days ago</span>
        </header>

        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </PostItem>
    </PostsListContainer>
  )
}
