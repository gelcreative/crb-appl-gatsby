import React from 'react'
import styled from 'styled-components'
import SubscriptionForm from './SubscriptionForm'

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.tertiaryColor};
  padding: 0 0;
  position:fixed;
  bottom:0;
  width:100%;
  color: ${props => props.theme.white};
  section {
    padding:0 0;
    height:125px;
  }
  .container {
    display: flex;
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
  footer {
    height:inherit;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <section>
        <footer>
              <SubscriptionForm />           
        </footer>
      </section>
    </StyledFooter>
  )
}

export default Footer