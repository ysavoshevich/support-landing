import React from 'react'
import Image from 'gatsby-image'
import FeatureBlock from '../ui/FeatureBlock'

export default function FeaturesSection({
  text,
  heading,
  emoji,
  image,
  featureBlocks,
}) {
  return (
    <section className="mb-20" id="features">
      <div className="container flex flex-col px-8 mx-auto md:px-16 xl:px-0 lg:flex-row">
        <div className=" lg:w-1/2">
          <Image
            fluid={image.localFile.childImageSharp.fluid}
            alt="A corgi smiling happily"
          />
        </div>
        <div className="lg:w-5/12">
          <h2 className="mb-4 text-left md:mb-8 md:text-center lg:text-left text-40px">
            {heading}{' '}
            <img className="inline mb-2" src={emoji.url} alt="sdf"></img>
          </h2>
          <p className="mb-8 text-left md:px-10 lg:px-0 md:text-center lg:text-left text-16px">
            {text}
          </p>
          {featureBlocks.map((block, i) => (
            <FeatureBlock
              key={i}
              heading={block.heading}
              text={block.text}
              active={i === 0 && true}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
