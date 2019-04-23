import React from 'react'
import styled from 'styled-components'
import CurbAppealLogo from './CurbAppealLogo'
import BBIALogo from '../components/BBIALogo'

const StyledPreFooter = styled.section`
  background-color: ${props => props.theme.tertiaryColor};
  // padding: 11.5rem 0;
  // bottom:0;
  // width:100%;
  .container {
    display: flex;
    align-items: center;
    justify-content: stretch;
    flex-wrap: wrap;
    .column {
      margin: 2rem;
    }
    downtownbarrie-logo-column {
      flex: 1;
      max-width: 100px;
    }
    .curbappeal-info-column {
      flex: 1;
      address {
        line-height: 1.3;
        margin-bottom: 1em;
      }
    }
    .curbappeal-logo-column {
      flex: 1;
      max-width: 100px;
    }
  }
`

const PreFooter = () => {
  return (
    <StyledPreFooter id="section8" style={{ height: '500px', backgroundColor: '#ebebeb' }}>
        <div className="container">
          <div className="column downtownbarrie-logo-column">
            <BBIALogo />
          </div>
          <div className="column curbappeal-info-column">
            <strong>DOWNTOWN BARRIE</strong>
            <address>
              93 Dunlop Street East, Unit 102 - Barrie, ON L4M 1A8              
            </address>
            <br />
            T: (705) 734-1414
            <br />
            <a href="mailto:INFO@DOWNTOWNBARRIE.CA" >INFO@DOWNTOWNBARRIE.CA</a>                      
            <div className="copywrite">
              <small>&copy; {new Date().getFullYear()} Downtown Barrie Business Improvement Area</small>
            </div>
          </div>
          <div className="column curbappeal-logo-column">
            <CurbAppealLogo />
          </div>
          
        </div>        
    </StyledPreFooter>
  )
}

export default PreFooter