import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const CurbAppealLogo = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          curbAppealLogo: file(relativePath: { eq: "curbappeal-logo.png"}) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <Img fluid={data.curbAppealLogo.childImageSharp.fluid} />
      )}
    />
  )
}

export default CurbAppealLogo