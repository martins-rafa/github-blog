import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.blue};
  }

  body {
    min-height: 100vh;
    font: 400 1rem 'Nunito', sans-serif;
    line-height: 160%;
    
    text-rendering: optimizeSpeed;
    
    background-color: ${({ theme }) => theme.colors['base-background']};
    color: ${({ theme }) => theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  .link {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.blue};

    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;

    border-bottom: 1px solid  transparent;
    transition: border-color 200ms ease-in-out ;

    &:hover {
      border-color: ${({ theme }) => theme.colors.blue};
    }
  }

`
