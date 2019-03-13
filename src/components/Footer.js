import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: red;
`

const Footer = () => {
  return (
    <StyledFooter>
      <small>&copy; Deez Development</small>
    </StyledFooter>
  )
}

export default Footer