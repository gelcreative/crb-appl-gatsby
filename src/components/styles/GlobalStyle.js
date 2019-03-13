import { createGlobalStyle } from 'styled-components'

import theme from './theme'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.backgroundColor};
  }
`

export default GlobalStyle