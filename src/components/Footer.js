import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.tertiaryColor};
  padding: 11.5rem 0;
`

const Footer = () => {
  return (
    <StyledFooter>
      <section class="container">
        <small>&copy; Deez Development</small>
      </section>
    </StyledFooter>
  )
}

export default Footer