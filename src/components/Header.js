import React, { Component } from 'react'
import styled from 'styled-components'
import Scrollspy from 'react-scrollspy'

const StyledHeader = styled.header`
  position: fixed;
  right: 0;
  height: 100%;
  padding: 1em 2em;

  .hamburger {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;

    .hamburger-inner {
      background-color: ${props => props.theme.secondaryColor};
      &::before,
      &::after {
        background-color: ${props => props.theme.secondaryColor};
      }
    }

    &.is-active .hamburger-inner::before,
    &.is-active .hamburger-inner::after {
      background-color: ${props => props.theme.secondaryColor};
    }
  }

  .curbappeal-header-inner {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
  }

  nav.is-active {
    span {
      opacity: 1;
      transform: translateX(0);
    }
  }

  li {
    margin: 1em 0;

    &.is-current {
      pointer-events: none;

      a::after {
        background: transparent;
        content: '';
        display: inline-block;
        height: 0.5em;
        width: 0.5em;
        border: 2px solid ${props => props.theme.primaryColor};
        border-radius: 50%;
        margin-left: 1.25em;
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
        background-color: ${props => props.theme.primaryColor};
        display: inline-block;
        height: 0.5em;
        width: 0.5em;
        border: none;
        border-radius: 50%;
        margin-left: 1.25em;
      }

      &:hover span {
        opacity: 1;
        transform: translateX(0);
        transition: transform 300ms ease-in-out, opacity 700ms ease-in;
        transition-delay: 100ms;
      }

      span {
        display: inline-block;
        opacity: 0;
        transform: translateX(-150%);
        transition: transform 300ms ease-in-out, opacity 100ms ease-out;
        transition-delay: 100ms;
        color: ${props => props.theme.white};
        background-color: ${props => props.theme.primaryColor};
        padding: 3px 1em;
        border-radius: 4px;
      }
    }
  }

  @media (max-width: 769px) {
    li a span,
    li.is-current span {
      opacity: 0;
      transform: translateX(-150%);
    }

    nav.is-active {
      span {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`

class Header extends Component {

  componentDidMount() {
    this.navItemClickBehaviour()
  }

  navItemClickBehaviour = () => {
    const navItems = Array.from(document.querySelectorAll('.curbappeal-header-inner li'))
    navItems.map(navItem => {
      navItem.addEventListener('click', () => {
        const activeItems = Array.from(document.querySelectorAll('.is-active'))
        activeItems.map(activeItem => {
          activeItem.classList.toggle('is-active')
          return null
        })
      })
      return null
    })
  }

  hamburgerClickBehaviour = () => {
    const hamburgerButton = document.querySelector('.hamburger')
    const theNav  = document.querySelector('.curbappeal-header-inner nav')
    hamburgerButton.classList.toggle('is-active')
    theNav.classList.toggle('is-active')
  }

  render() {
    return (
      <StyledHeader>
        <button className="hamburger hamburger--emphatic" type="button" onClick={this.hamburgerClickBehaviour}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className="curbappeal-header-inner">
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
        </div>
      </StyledHeader>
    )
  }
}

export default Header