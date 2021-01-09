import React from 'react'
import Image from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Tabs, { TabPane } from 'rc-tabs'
import DollarSign from '~/assets/images/dollar-sign.svg'
import Settings from '~/assets/images/settings.svg'
import Graph from '~/assets/images/graph.svg'
import Portfolio from '~/assets/images/portfolio.svg'
import Arrows from '~/assets/images/arrows.svg'
import 'rc-tabs/assets/index.css'

function TabContent() {
  const data = useStaticQuery(graphql`
    query {
      img: file(
        relativePath: {
          eq: "images/slide-features-section/social-dashboard.png"
        }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="relative w-1/2 mt-20 text-white">
      <h2 className=" text-64px">
        Introduce quality feature that boost your website rank & performance
      </h2>
      <p>
        Build an incredible workplace and grow your business with Gusto’s
        all-in-one platform with amazing contents. Get your tests delivered at
        let home collect sample from the victory of the supplies design system.
      </p>
      <button>More Details</button>
      <Image
        style={{ position: 'absolute', top: '0', left: '100%', width: '100%' }}
        fluid={data.img.childImageSharp.fluid}
        alt="A corgi smiling happily"
        className="rounded-md"
      />
    </div>
  )
}

function CustomTabBar({ icon, ...props }) {
  console.log(props)
  switch (icon) {
    case 'dollar':
      return (
        <div className="px-5 text-white">
          <DollarSign />
          <p>Budget Overview</p>
        </div>
      )

    case 'settings':
      return (
        <div className="px-5 text-white">
          <Settings />
          <p>Create & Adjust</p>
        </div>
      )

    case 'graph':
      return (
        <div className="px-5 text-white">
          <Graph />
          <p>View Reports</p>
        </div>
      )
    case 'portfolio':
      return (
        <div className="px-5 text-white">
          <Portfolio />
          <p>Optimize Website</p>
        </div>
      )
    case 'arrows':
      return (
        <div className="px-5 text-white">
          <Arrows />
        </div>
      )
    default:
      return (
        <div className="px-5 text-white">
          <Arrows />
        </div>
      )
  }
}

export default function SlideFeaturesSection() {
  return (
    <section
      style={{ backgroundColor: '#353448' }}
      className="relative block py-48"
    >
      <div className="justify-center pl-40 mx-auto mb-20">
        <Tabs defaultActiveKey="1" className="relative">
          <div
            className="absolute w-full bg-grey"
            style={{ top: '51px', height: '1px' }}
          ></div>
          <TabPane key={'1'} tab={<CustomTabBar icon="dollar" />}>
            <TabContent />
          </TabPane>
          <p className="text-white">Custom Dashboard</p>
          <TabPane key={'2'} tab={<CustomTabBar icon="settings" />}>
            <TabContent />
          </TabPane>
          <TabPane key={'3'} tab={<CustomTabBar icon="graph" />}>
            <TabContent />
          </TabPane>
          <TabPane key={'4'} tab={<CustomTabBar icon="portfolio" />}>
            <TabContent />
          </TabPane>
          <TabPane key={'5'} tab={<CustomTabBar icon="arrows" />}>
            <TabContent />
          </TabPane>
        </Tabs>
      </div>
    </section>
  )
}
