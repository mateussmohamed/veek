import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  body, html {
    overflow-x: hidden;
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;

  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${normalize()};
`

const colors = {
  primary: '#283583',
  secondary: '#eb5b49',
}

const typography = {
  lato: '"Lato", sans-serif',
  buttonSize: '14px',
}

export default {
  colors,
  typography,
  button: {
    color: colors.lightRed,
  },
}
