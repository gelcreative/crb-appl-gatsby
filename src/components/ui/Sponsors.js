import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledSponsors = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  align-items: center;
  li {
    flex: 1 1 250px;
    max-width: 300px;
    margin: 0.5em;
  }
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
                <li key={sponsor.id}>
                  <a href={sponsor.frontmatter.url} target="_blank" rel="noopener noreferrer">
                    <Img fluid={sponsor.frontmatter.image.childImageSharp.fluid} alt={sponsor.frontmatter.name} />
                  </a>
                </li>
              ))}
            </StyledSponsors>
          )
        }}
      />
    )
  }
}

export default Sponsors