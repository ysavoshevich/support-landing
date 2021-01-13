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
    <div className="flex flex-col items-center px-4 mt-20 text-white lg:items-start lg:flex-row">
      <div className="w-full mb-2 lg:pr-24 lg:w-1/2">
        <h2 className="mb-5 text-center text-40px lg:text-left">
          Introduce quality feature that boost your website rank & performance
        </h2>
        <p className="mb-5 text-center text-18px lg:text-left">
          Build an incredible workplace and grow your business with Gusto’s
          all-in-one platform with amazing contents. Get your tests delivered at
          let home collect sample from the victory of the supplies design
          system.
        </p>
        <button className="block px-4 py-3 mx-auto text-white transition-colors duration-300 rounded-md hover:bg-darkBlue bg-regularOrange">
          More Details
        </button>
      </div>
      <Image
        fluid={data.img.childImageSharp.fluid}
        alt="A corgi smiling happily"
        className="w-full rounded-md lg:w-1/2 "
      />
    </div>
  )
}

function CustomTabBar({ icon, ...props }) {
  console.log(props)
  switch (icon) {
    case 'dollar':
      return (
        <div className="px-5 pb-2 text-white">
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
          <p>Custom Dashboard</p>
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
      className="relative block py-32"
    >
      <div className="container pl-0 mx-auto mb-20 lg:pl-64 ">
        <Tabs defaultActiveKey="1" className="relative">
          <div
            className="absolute w-full bg-grey"
            style={{ top: '80px', height: '1px' }}
          ></div>
          <TabPane key={'1'} tab={<CustomTabBar icon="dollar" />}>
            <TabContent />
          </TabPane>
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
