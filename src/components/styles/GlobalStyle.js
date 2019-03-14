import { createGlobalStyle } from 'styled-components'

import theme from './theme'
import cssreset from './cssreset.css'
import hamburgers from './hamburgers-master/dist/hamburgers.css'

const GlobalStyle = createGlobalStyle`
  @import url(${cssreset});
  @import url(${hamburgers});

  html {
    font-size: 10px;
  }

  body {
    background-color: ${theme.white};
    font-family: sans-serif;
    font-size: 1.8rem;
  }

  h1 {
    font-size: 4rem;
    text-transform: uppercase;
  }

  iframe {
    max-width: 100%;
  }

  .container {
    width: 1200px;
    max-width: 95%;
    margin: 0 auto;
  }
`

export default GlobalStyle