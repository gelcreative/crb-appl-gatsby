import React from 'react'
import styled from 'styled-components'
import Scrollspy from 'react-scrollspy'

const StyledHeader = styled.header`
  background: ${props => props.theme.backgroundColor};
`

const Header = () => {
  return (
    <StyledHeader>
      <Scrollspy
        items={['section1', 'section2', 'section3', 'section4', 'section5']}
        currentClassName="is-current"
      >
        <nav role="navigation">
          <ul>
            <li><a href="#section1">section1</a></li>
            <li><a href="#section2">section2</a></li>
            <li><a href="#section3">section3</a></li>
            <li><a href="#section4">section4</a></li>
            <li><a href="#section5">section5</a></li>
          </ul>
        </nav>
      </Scrollspy>
    </StyledHeader>
  )
}

export default Header