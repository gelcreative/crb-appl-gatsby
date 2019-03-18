import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledSponsors = styled.ul`
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
        render={data => {
          const { edges: sponsors } = data.allMarkdownRemark
          return (
            <StyledSponsors>
              {sponsors.map(({ node: sponsor }) => (
                <ul key={sponsor.id}>
                  <a href={sponsor.frontmatter.url} target="_blank" rel="noopener noreferrer">
                    <Img fluid={sponsor.frontmatter.image.childImageSharp.fluid} alt={sponsor.frontmatter.name} />
                  </a>
                </ul>
              ))}
            </StyledSponsors>
          )
        }}
      />
    )
  }
}

export default Sponsors