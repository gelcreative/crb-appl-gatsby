import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CustomCountdown from "../components/CustomCountdown"
import CurbAppealLogo from '../components/CurbAppealLogo'
import PreFooter from '../components/PreFooter'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <article>
      <section id="section1" style={{ height: '500px', backgroundColor: '#DCDCDC' }}>
        <div className="container">
          <CurbAppealLogo />      
        </div>
      </section>
      <section id="section2" style={{ height: '500px', backgroundColor: '#DCDCDC' }}>
        <div className="container">
          <div id="intro">
          <h2><em>AN</em> OUTDOOR DINING EXPERIENCE</h2>
          <h3>5 Courses. 5 Chefs. 1 Amazing Location</h3>
          <p>This event shines the light on a unique pocket of real estate in Barrie's downtown core each year. We've selected some of the city's best chefs to showcase their world-class talents. Each of the five courses is paired with wine or beer to compliment their flavours.</p>
          </div>
          <div>
          <h4>FIRDAY JUNE 14TH</h4>
          <h5>LOCATION TO BE REVEALED...</h5>
          <p><strong>Along the sparkling shores of Kempenfelt Bay at our beautiful Heritage Park</strong></p>
          </div>
        </div>
      </section>
      
      <section id="section3" style={{ height: '500px', backgroundColor: '#D3D3D3' }}>
        <div className="container">
           <CustomCountdown/>
        </div>
      </section>
      <section id="section4" style={{ height: '500px', backgroundColor: '#C0C0C0' }}>
        <div className="container">
          <h2>Section 4</h2>
        </div>
      </section>
      <section id="section5" style={{ height: '500px', backgroundColor: '#A9A9A9' }}>
        <div className="container">
          <h2 className="centered">Section 5</h2>
        </div>
      </section>
      <section id="section6" style={{ height: '500px', backgroundColor: '#808080' }}>
        <div className="container">
          <h2>Section 6</h2>
          
        </div>
      </section>
      <section id="section7" style={{ height: '500px', backgroundColor: '#808080' }}>
        <div className="container">
          <h2>Section 7</h2>
          
        </div>
      </section>
      <PreFooter />
    </article>
  </Layout>
)

export default IndexPage
