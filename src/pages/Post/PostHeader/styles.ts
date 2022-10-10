import styled from 'styled-components'

export const PostHeaderContainer = styled.header`
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors['base-post']};
  margin-top: calc(-169.78px / 2);
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors['base-title']};
    margin-bottom: 0.5rem;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`
export const InfoContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  span {
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  .info-icon {
    width: 1.125rem;
    height: 1.125rem;
    color: ${({ theme }) => theme.colors['base-label']};
  }
`
