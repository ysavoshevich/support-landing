import React from 'react'
import Layout from '~/components/ui/Layout'
import * as Sections from '~/components/sections/index'

const IndexPage = ({ data }) => {
  return (
    <Layout
      nav={data.graphCmsPage.sections[0]}
      footer={data.graphCmsPage.sections[data.graphCmsPage.sections.length - 1]}
    >
      {data.graphCmsPage.sections.map((section) => {
        const Component = Sections[section.__typename.split('_')[1]]
        if (!Component) return null
        if (Object.keys(section).length === 1) return null
        return <Component key={section.__typename} {...section} />
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    graphCmsPage(slug: { eq: "home" }) {
      sections {
        __typename
        ... on GraphCMS_FeaturesSection {
          text
          heading
          emoji {
            url
          }
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          featureBlocks {
            text
            heading
          }
        }
        ... on GraphCMS_GetNotifiedSection {
          heading
          text
          inputPlaceholder
          buttonText
        }
        ... on GraphCMS_Navbar {
          links {
            text
            sectionName
          }
        }
        ... on GraphCMS_Footer {
          links {
            text
            to
          }
        }
        ... on GraphCMS_HeroSection {
          title
          text
          buttonText
          inputPlaceholder
          image {
            url
          }
          sponsors {
            url
          }
        }
        ... on GraphCMS_PricingSection {
          heading
          text
          pricingBlocks {
            text
            heading
            price
            negativePoints
            positivePoints
          }
        }
        ... on GraphCMS_ServiceSection {
          supportBlocks {
            text
            heading
            icon {
              url
            }
          }
        }
        ... on GraphCMS_TestimonialSection {
          text
          heading
          testimonialBlocks {
            text
            username
            name
            avatar {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 45) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        ... on GraphCMS_WorkHardSection {
          heading
          text
          emoji {
            url
          }
          bulletPoint
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
