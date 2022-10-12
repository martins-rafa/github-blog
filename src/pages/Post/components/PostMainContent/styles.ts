import styled from 'styled-components'

export const PostMainContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  img {
    width: 100%;
  }

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors.blue};
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 1rem;
    font-weight: 400;
  }

  pre {
    background: ${({ theme }) => theme.colors['base-post']};
    padding: 1rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: 'Fira Code', monospace !important;
        line-height: 160% !important;
      }
    }
  }
`
