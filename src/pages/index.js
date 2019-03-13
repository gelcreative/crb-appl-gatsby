import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
  </Layout>
)

export default IndexPage
