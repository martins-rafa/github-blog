import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  margin-bottom: 3rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    h2 {
      font-size: 1.125rem;
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors['base-span']};
    }
  }

  form {
    input {
      width: 100%;
      padding: 0.75rem 1rem;
      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme.colors['base-border']};
      background-color: ${({ theme }) => theme.colors['base-input']};
      color: ${({ theme }) => theme.colors['base-label']};

      ::placeholder {
        color: ${({ theme }) => theme.colors['base-label']};
      }
    }
  }
`
