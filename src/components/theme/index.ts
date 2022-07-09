import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  ${normalize()};

  *, *:before, *:after {
    box-sizing: inherit;
  }

   body, html {
    overflow-x: hidden;
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
  }


  html {
    @media only screen and (min-width: 0em) {
      background-image: url(/assets/bg_left.png);
      background-position: -170px 200px;
      background-repeat: no-repeat;
    }

    @media only screen and (min-width: 48em) {
      background-position: -110px 200px;
    }
  }

  body {
    @media only screen and (min-width: 64em) {
      background-image: url(/assets/bg_right.png);
      background-position: 115% 110px;
      background-repeat: no-repeat;
    }
  }
`

const colors = {
  primary: '#283583',
  secondary: '#eb5b49',
}

const typography = {
  lato: '"Lato", sans-serif',
  buttonSize: '14px',
}

const theme = {
  colors,
  typography,
  button: {
    color: colors.primary,
  },
}

export default theme
