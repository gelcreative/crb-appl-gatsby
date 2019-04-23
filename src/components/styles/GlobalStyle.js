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
    font-family: futura-pt, sans-serif;
    font-size: 1.8rem;    
    color: ${theme.primaryColor};
  }

  .container {
    width: 1200px;
    max-width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border:1px solid blue;
    text-align:center;
  }
  #intro {
    margin-bottom:40px;
  }
  h1, h2, h3 {
    width:100%;
  }
  h1, h2, h3, h4, h5 {
    margin-bottom:10px;
    em {
      font-weight:300;
    }
  }

  h2 {
    font-size:4rem;
    font-weight:700;
  }

  h3 {
    color:${theme.secondaryColor};
    font-size:4rem;
    font-weight:300;
  }
  p {
    margin-top:10px;
    line-height: 2.5rem;
  }

  
`

export default GlobalStyle