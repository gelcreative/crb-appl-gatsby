import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CurbAppealLogo from '../components/CurbAppealLogo'
import TicketTimer from '../components/ui/TicketTimer'
import ParticipatingPartners from '../components/ui/ParticipatingPartners'
import Sponsors from '../components/ui/Sponsors'

const StyledIndexPage = styled.article`

  section {
    padding: 10rem 0;
  }

  .curbappeal-masthead-section {
    text-align: center;
    padding-top: 0;

    .curbappeal-masthead-content-wrapper:nth-child(-n+2) {
      margin-bottom: 5rem;

      &:first-child {
        max-width: 100px;
        margin: 0 auto 5rem;
        text-align: center;
        padding: 2rem 0;
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StyledIndexPage>
      <section id="section1" className="curbappeal-masthead-section" style={{ backgroundColor: '#DCDCDC' }}>
        <div className="container">
          <div className="curbappeal-masthead-content-wrapper">
            <CurbAppealLogo />
          </div>
          <div className="curbappeal-masthead-content-wrapper">
            <iframe title="Curb Appeal Video" width="560" height="315" src="https://www.youtube.com/embed/MAUUilvolG0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="curbappeal-masthead-content-wrapper">
            <h1>event info here - who. what. when.</h1>
          </div>
        </div>
      </section>
      <section id="section2" style={{ backgroundColor: '#D3D3D3' }}>
        <div className="container">
          <TicketTimer />
        </div>
      </section>
      <section id="section3" style={{ backgroundColor: '#C0C0C0' }}>
        <div className="container">
          <h2>Participating Partners</h2>
          <ParticipatingPartners />
          <h2>Sponsors</h2>
          <Sponsors />
        </div>
      </section>
      <section id="section4" style={{ backgroundColor: '#A9A9A9' }}>
        <div className="container">
          <h2>Section 4</h2>
        </div>
      </section>
    </StyledIndexPage>
  </Layout>
)

export default IndexPage
