import React from 'react'
import styled from 'styled-components'
import CurbAppealLogo from './CurbAppealLogo'
import BBIALogo from '../components/BBIALogo'

const StyledPreFooter = styled.section`
  background-color: ${props => props.theme.tertiaryColor};
  .container {
    .column {
      margin: 2rem;
    }
    .downtownbarrie-logo-column {
      flex: 1;
      max-width: 100px;
    }
    .curbappeal-info-column {
      flex: 1;
      text-align:left;
      line-height:2.5rem;
      font-size:1.6rem;
    }
    .copywrite {
      flex: 1;
      padding:20px;
      text-align:center;
      font-size: 1.6rem;   
    }
    .curbappeal-logo-column {
      flex: 1;
      max-width: 100px;
    }
  }
`

const PreFooter = () => {
  return (
    <StyledPreFooter id="section8" style={{ minHeight: '200px', backgroundColor: '#ebebeb' }}>
        <div className="container">
          <div className="column downtownbarrie-logo-column">
            <BBIALogo />
          </div>
          <div className="column curbappeal-info-column">
            <strong>Downtown Barrie Business Association (BIA)</strong>
            <address>
              <a href="https://www.google.com/maps/place/93+Dunlop+St+E+%23102,+Barrie,+ON+L4M+1A6/@44.3892178,-79.689203,17z" target="_blank">93 Dunlop Street East, Unit 102 Barrie, ON L4M 1A8</a>
            </address>
            <a href="tel:+1-705-734-1414">T: (705) 734-1414</a>            
            <br />
            <a href="mailto:info@downtownbarrie.ca" >info@downtownbarrie.ca</a>                      
          </div>
          <div className="column curbappeal-logo-column">
            <CurbAppealLogo />
          </div>
          
        </div>
        <div className="clearfix"></div>
        <div className="container">
          <div className="copywrite">
            <small>&copy; {new Date().getFullYear()} Downtown Barrie Business Association (BIA)</small>
          </div> 
        </div>       
    </StyledPreFooter>
  )
}

export default PreFooter