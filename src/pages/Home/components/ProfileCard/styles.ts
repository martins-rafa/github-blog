import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  display: grid;
  grid-template-columns: 148px 1fr;
  align-items: flex-end;
  gap: 2rem;

  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  margin-top: -5rem;
  margin-bottom: 4.5rem;

  img {
    width: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileCardHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 0.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`

export const BioParagraph = styled.p`
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
