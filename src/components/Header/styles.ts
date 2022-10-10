import styled from 'styled-components'

import HeaderBackground from '../../assets/header-bg.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${() => `url(${HeaderBackground}) no-repeat center`};
  background-size: cover;

  padding: 4rem 0 8.375rem;
`
