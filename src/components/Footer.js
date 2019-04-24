import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.tertiaryColor};
  padding: 2.5rem 0;
  position:fixed;
  bottom:0;
  width:100%;
  color: ${props => props.theme.white};
  .container {
    display: flex;
    align-items: center;
    justify-content: stretch;
    flex-wrap: wrap;
    .column {
      flex:1;
      margin: 2rem;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <section>
        <footer>
          <div className="container">
            <div className="row">
              <div className="column">
                <h4><em>BECOME A</em> CURB APPEAL INSIDER</h4>
                <p>Join our email list to get alerted with Curb Appeal event updates.</p>
              </div>
              <div className="column">
                <button className="button-light">Subscribe Now</button>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </StyledFooter>
  )
}

export default Footer