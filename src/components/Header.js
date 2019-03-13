import React from 'react'
import styled from 'styled-components'
import Scrollspy from 'react-scrollspy'

const StyledHeader = styled.header`
  position: fixed;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;

  li {
    margin: 1em 0;
  }

  li a {
    text-decoration: none;
  }

  li.is-current a::after {
    content: '';
    background-color: #ffc857;
    display: inline-block;
    height: 0.5em;
    width: 0.5em;
    border: none;
    border-radius: 50%;
    margin-left: 1em;
  }

  li a::after {
    background-color: #ffffff;
    content: '';
    display: inline-block;
    height: 0.5em;
    width: 0.5em;
    border: 1px solid #000000;
    border-radius: 50%;
    margin-left: 1em;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <nav role="navigation">
        <Scrollspy
          items={['section1', 'section2', 'section3', 'section4', 'section5']}
          currentClassName="is-current"
        >
          <li><a href="#section1">section1</a></li>
          <li><a href="#section2">section2</a></li>
          <li><a href="#section3">section3</a></li>
          <li><a href="#section4">section4</a></li>
          <li><a href="#section5">section5</a></li>
        </Scrollspy>
      </nav>
    </StyledHeader>
  )
}

export default Header