import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.tertiaryColor};
  // padding: 11.5rem 0;
  position:fixed;
  bottom:0;
  width:100%;
  .container {
    display: flex;
    align-items: center;
    justify-content: stretch;
    flex-wrap: wrap;
    .column {
      margin: 2rem;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <section>
        <div className="container">
          
        </div>
        <footer>
          <div className="container">
            <h4><em>BECOME A</em> CURB APPEAL INSIDER</h4>
            <p>Join our email list to get alerted with Curb Appeal event updates.</p>
          </div>
        </footer>
      </section>
    </StyledFooter>
  )
}

export default Footer