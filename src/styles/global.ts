import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme['base-background']};
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
    color: ${(props) => props.theme['base-text']};
  }
`
