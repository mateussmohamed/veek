import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme, { GlobalStyle } from 'components/theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Veek</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
