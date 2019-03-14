import React from 'react'
import styled from 'styled-components'

import CurbAppealLogo from './CurbAppealLogo'

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.tertiaryColor};
  padding: 11.5rem 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: stretch;
    flex-wrap: wrap;
    .column {
      margin: 2rem;
    }
    .curbappeal-logo-column {
      flex: 1 3 100px;
      /* width: 90%; */
      max-width: 100px;
    }
    .curbappeal-info-column {
      flex: 3 3 600px;
      address {
        line-height: 1.3;
        margin-bottom: 1em;
      }
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <section className="container">
        <div className="column curbappeal-logo-column">
          <CurbAppealLogo />
        </div>
        <div className="column curbappeal-info-column">
          <address>
            93 Dunlop Street East, Unit 102 <br />Barrie, ON L4M 1A8
          </address>
          <small>&copy; {new Date().getFullYear()} Downtown Barrie Business Improvement Area</small>
        </div>
      </section>
    </StyledFooter>
  )
}

export default Footer