import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledPartners = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  li {
    flex: 1 1 200px;
    max-width: 200px;
    margin: 1em;
  }
`

class ParticipatingPartners extends Component {

  render() {
    return (
      <StaticQuery
        query={graphql`
          query ParticipatingPartnersQuery {
            allMarkdownRemark(filter: {frontmatter: {type: {eq: "partner"}}}) {
              edges {
                node {
                  html
                  frontmatter {
                    name
                    image {
                      childImageSharp {
                        fluid(maxWidth: 300, quality: 100) {
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
          const { edges: partners } = data.allMarkdownRemark
          return (
            <StyledPartners>
              {partners.map(({ node: partner}) => (
                <li key={partner.id}>
                  <Img fluid={partner.frontmatter.image.childImageSharp.fluid} />
                  <h3>{partner.frontmatter.name}</h3>
                  <p dangerouslySetInnerHTML={{ __html: partner.html}} />
                  <a href={partner.frontmatter.url}>link</a>
                </li>
              ))}
            </StyledPartners>
          )
        }}
      />
    )
  }
}

export default ParticipatingPartners