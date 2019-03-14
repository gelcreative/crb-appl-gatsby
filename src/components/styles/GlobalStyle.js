import { createGlobalStyle } from 'styled-components'

import theme from './theme'
import cssreset from './cssreset.css'
import hamburgers from './hamburgers-master/dist/hamburgers.css'

const GlobalStyle = createGlobalStyle`
  @import url(${cssreset});
  @import url(${hamburgers});

  body {
    background-color: ${theme.white};
  }

  .container {
    width: 1200px;
    max-width: 95%;
    margin: 0 auto;
  }
`

export default GlobalStyle