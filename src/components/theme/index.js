import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  body, html {
    overflow-x: hidden;
  }
  ${normalize()};
`

const colors = {
  lightRed: '#ff4e50',
  black: '#000000',
  sunYellow: '#f9d423',
  veryLightPink: '#f7f3f2',
  greyishBrown: '#444444',
  black0: 'rgba(0, 0, 0, 0)',
  black60: 'rgba(0, 0, 0, 0.6)',
  veryLightPinkTwo: '#cccccc',
  brownGrey: '#999999',
  cornFlower: '#667df3',
  yellowIshorange: '#ffa710',
  aqua: '#19d4ca',
  brownishGrey: '#666666',
  veryLightPinkThree: '#d8d8d8',
  veryLightPinkFour: '#e3e3e3',
}

const typography = {
  montserrat: '"Montserrat", sans-serif',
  roboto: '"Roboto", sans-serif',
  buttonSize: '14px',

  montserratStyle: {
    'font-family': '"Montserrat", sans-serif',
    'font-weight': 'normal',
    'font-style': 'normal',
    'font-stretch': 'normal',
    'line-height': 'normal',
    'letter-spacing': 'normal',
  },

  robotoStyle: {
    'font-family': '"Montserrat", sans-serif',
    'font-weight': 'normal',
    'font-style': 'normal',
    'font-stretch': 'normal',
    'line-height': 'normal',
    'letter-spacing': 'normal',
  },
}

export default {
  colors,
  typography,
  button: {
    color: colors.lightRed,
  },
}
