import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const BBIALogo = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          bbiaLogo: file(relativePath: { eq: "bbia-logo.png"}) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Img fluid={data.bbiaLogo.childImageSharp.fluid} />
      )}
    />
  )
}

export default BBIALogo