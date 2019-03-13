import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: ${props => props.theme.backgroundColor};
`

const Header = () => {
  return (
    <StyledHeader>
      <nav role="navigation">
        <ul>
          <li>Hello.</li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header