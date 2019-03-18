import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-plugin-manifest'
import styled from 'styled-components'

const StyledSponsors = styled.div`
  background: purple;
`

class Sponsors extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SponsorsQuery {
            allMarkdownRemark(filter: {frontmatter: {type: {eq: "sponsor"}}}) {
              edges {
                node {
                  frontmatter {
                    name
                    image {
                      childImageSharp {
                        fluid(maxWidth: 350, quality: 100) {
                          ...GatsbyImageSharpFluid_tracedSVG
                        }
                      }
                    }
                    url
                  }
                }
              }
            }
          }
        `}
      />
    )
  }
}

export default Sponsors