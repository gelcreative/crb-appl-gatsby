import { createGlobalStyle } from 'styled-components'

import theme from './theme'
import cssreset from './cssreset.css'

const GlobalStyle = createGlobalStyle`
  @import url(${cssreset});
`

export default GlobalStyle