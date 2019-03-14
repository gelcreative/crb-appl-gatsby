import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CurbAppealLogo from '../components/CurbAppealLogo'

const StyledIndexPage = styled.article`
  .curbappeal-masthead-logo-container {
    max-width: 100px;
    margin: 0 auto;
    padding: 2rem 0;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StyledIndexPage>
      <section id="section1" style={{ height: '500px', backgroundColor: '#DCDCDC' }}>
        <div className="container">
          <div className="curbappeal-masthead-logo-container">
            <CurbAppealLogo />
          </div>
          <div className="curbappeal-masthead-video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MAUUilvolG0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="curbappeal-masthead-heading-container">
            <h1>event info here - who. what. when.</h1>
          </div>
        </div>
      </section>
      <section id="section2" style={{ height: '500px', backgroundColor: '#D3D3D3' }}>
        <div className="container">
          <h2>Section 2</h2>
        </div>
      </section>
      <section id="section3" style={{ height: '500px', backgroundColor: '#C0C0C0' }}>
        <div className="container">
          <h2>Section 3</h2>
        </div>
      </section>
      <section id="section4" style={{ height: '500px', backgroundColor: '#A9A9A9' }}>
        <div className="container">
          <h2>Section 4</h2>
        </div>
      </section>
      <section id="section5" style={{ height: '500px', backgroundColor: '#808080' }}>
        <div className="container">
          <h2>Section 5</h2>
        </div>
      </section>
    </StyledIndexPage>
  </Layout>
)

export default IndexPage
