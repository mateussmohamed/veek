import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  body, html {
    overflow-x: hidden;
    font-family: 'Lato', sans-serif;
  }

  ${normalize()};
`

const colors = {
  primary: '#eb5b49',
  secondary: '#283583',
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
