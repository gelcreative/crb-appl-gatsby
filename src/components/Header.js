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

    &.is-current {
      pointer-events: none;

      a::after {
        background-color: #ffffff;
        content: '';
        display: inline-block;
        height: 0.5em;
        width: 0.5em;
        border: 2px solid #ffc857;
        border-radius: 50%;
        margin-left: 1em;
      }

      span {
        opacity: 1;
        transform: translateX(0);
      }
    }

    a {
      text-decoration: none;

      &::after {
        content: '';
        background-color: #ffc857;
        display: inline-block;
        height: 0.5em;
        width: 0.5em;
        border: none;
        border-radius: 50%;
        margin-left: 1em;
      }

      &:hover span {
        opacity: 1;
        transform: translateX(0);
        transition: transform 300ms ease-in-out, opacity 700ms ease-in;
      }

      span {
        display: inline-block;
        opacity: 0;
        transform: translateX(-150%);
        transition: transform 300ms ease-in-out, opacity 100ms ease-out;
      }
    }
  }

  @media (max-width: 769px) {
    li a span,
    li.is-current span {
      opacity: 0;
      transform: translateX(-150%);
    }
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
          <li><a href="#section1"><span>section1</span></a></li>
          <li><a href="#section2"><span>section2</span></a></li>
          <li><a href="#section3"><span>section3</span></a></li>
          <li><a href="#section4"><span>section4</span></a></li>
          <li><a href="#section5"><span>section5</span></a></li>
        </Scrollspy>
      </nav>
    </StyledHeader>
  )
}

export default Header