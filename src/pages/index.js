import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <article class="container">
      <h1>Hi people</h1>
      <section id="section1" style={{ height: '500px' }}>
        <h2>Section 1</h2>
      </section>
      <section id="section2" style={{ height: '500px' }}>
        <h2>Section 2</h2>
      </section>
      <section id="section3" style={{ height: '500px' }}>
        <h2>Section 3</h2>
      </section>
      <section id="section4" style={{ height: '500px' }}>
        <h2>Section 4</h2>
      </section>
      <section id="section5" style={{ height: '500px' }}>
        <h2>Section 5</h2>
      </section>
    </article>
  </Layout>
)

export default IndexPage
