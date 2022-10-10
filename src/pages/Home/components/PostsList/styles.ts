import styled from 'styled-components'

export const PostsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(416px, 1fr));
  place-items: center;
  gap: 2rem;

  margin-bottom: 10rem;
`

export const PostItem = styled.div`
  width: 100%;
  max-width: 416px;
  height: 260px;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors['base-post']};
  border: 2px solid transparent;

  cursor: pointer;

  transition: border-color, 200ms ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.colors['base-label']};
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    h2 {
      max-width: 270px;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors['base-title']};
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors['base-span']};
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
