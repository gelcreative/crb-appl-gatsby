import React, { Component } from 'react'
import styled from 'styled-components'
import SubscriptionForm from './SubscriptionForm'
import ReactModal from 'react-modal'


const StyledFooter = styled.footer`
background-color: ${props => props.theme.tertiaryColor};
padding: 0 0;
// position:fixed;
bottom:0;
left:0;
overflow:hidden;
padding:0;
width:100%;
color: ${props => props.theme.white};
section {
  padding:0 0;
  min-height:125px;
}
.container {
  // display: flex;
  // width:100%;
  height:100%;
  align-items: center;
  justify-content: stretch;
  flex-wrap: wrap;
  .column {
    flex:1;
    margin: 2rem;
  }
}
h4 {
  font-weight:600;
  font-size:3.2rem;
}
footer {
  height:inherit;
}
`

class Footer extends Component {
  render(){
    return (
        <StyledFooter>          
          <section>
                  <SubscriptionForm />                             
          </section>                   
        </StyledFooter>        
    )
  }
}

export default Footer