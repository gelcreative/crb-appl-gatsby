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
  .hamburger {
    width: 100%;
    text-align: right;
  }
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    flex-flow: row wrap;
    padding-top:4rem;
    padding-bottom:4rem;
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center center;
    
  }
  input {
    border-radius: .5rem;
  }
  body {
    background-color: ${theme.white};
    font-family: futura-pt, sans-serif;
    font-size: 1.8rem;    
    color: ${theme.primaryColor};
  }

  .white {
    color:${theme.white};
  }
  .black {
    color:${theme.black};
  }

  a, a:active, a:visited {
    color:${theme.primaryColor};
    text-decoration:none;
    display:inline-block;
  }

  a:hover {
    cursor: pointer;
  }

  .container {
    width: 1200px;
    max-width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align:center;
    &.center {
      height:100%;
    }
  }
  .container-partners {
    margin-top:-50px;
  }
  .space-between {
    justify-content: space-between;
  }

  .align-top {
    align-items: baseline;
  }
  .column {
    flex:1;
  }
  .close {
    position:absolute;
    top:10px;
    right:10px;
    color:${props => props.theme.white};
    font-size:2rem;
  }
  .socialIcons {
    margin-bottom: 90px;
    a {
      margin-right:10px;
    }
  } 
  .sectionIcon {
    margin-bottom:20px;
  }
  #intro {
    margin-bottom:80px;
  }
  h1, h2, h3, h4, h5 {
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
    margin-bottom:40px;
  }
  h4 {
    font-size:4rem;
    font-weight:300;
  }
  h5 {
    font-size:1.8rem;
    letter-spacing:.8rem;
    font-weight:600;
  }
  p {
    margin-top:10px;
    line-height: 2.5rem;
    width:100%;
    max-width: 900px;
    margin: 0 auto;
  }
  strong {
    font-weight:600;
  }
  .left-justify {
    text-align:left;
    padding-right:100px;
  }

  .chef-logo-background {
    background:${theme.secondaryColor};
    height:200px;
    display:flex;
    align-items:center;
    justify-content: center;
  }

  .column.chef-column {
    border:1px solid ${theme.grey};
    max-width:18%;
    padding-bottom:50px;
    margin-bottom:20px;
    // margin:0 15px;
    h4 {
      font-weight:600;
      font-size:2.25rem;
      text-transform:uppercase;
      margin-top:30px;
    }
    p {
      box-sizing:border-box;
      padding:10px 10px 40px 10px;
    }
    a {
      border-bottom: 1px solid ${theme.grey};
    }
  }
  button, input[type='submit'] {
    border:0;
    border-radius:.5rem;
    padding:1.75rem 3rem;
    font-size:1.6rem;
    width:440px;
    text-transform:uppercase;
  }
  .button-light {
    background:${theme.secondaryColor};
    color:${theme.white};
  }
  .button-dark {
    background:${theme.primaryColor};
    color:${theme.white};
  }
  .row {
    display:flex;
    align-items: center;
    justify-content: stretch;
    width:100%;
  }
  @media screen and (max-width:600px){
    .column {
      flex-direction: column;
    }
  }
`

export default GlobalStyle