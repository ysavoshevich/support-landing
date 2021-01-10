import React from 'react'
import Image from 'gatsby-image'
import TextWithIcon from '~/components/ui/TextWithIcon'
import Link from 'gatsby-link'
import RightArrowBlue from '~/assets/images/right-arrow-blue.svg'
import splitArrIntoChunks from '~/utils/splitArrIntoChunks'

export default function WorkHardSection({
  heading,
  text,
  emoji,
  bulletPoint,
  image,
}) {
  return (
    <section className="mt-40 mb-10" id="work">
      <div className="container flex flex-col-reverse justify-center px-5 mx-auto md:px-24 lg:px-0 lg:flex-row">
        <div className="pt-12 lg:w-5/12">
          <h2 className="text-center lg:text-left text-40px mb-7 ">
            {heading}{' '}
            <img className="inline mb-2" src={emoji.url} alt="sdf"></img>
          </h2>
          <p className="mb-8 text-center lg:text-left text-18px">{text}</p>
          <div className="flex flex-col justify-center pl-5 mb-2 md:pl-0 md:flex-row md:justify-around lg:justify-start">
            {splitArrIntoChunks(bulletPoint, 3).map((chunk, i) => {
              return (
                <div key={i} className="mr-5">
                  {chunk.map((point, i) => (
                    <TextWithIcon type="green" text={point} key={i} />
                  ))}{' '}
                </div>
              )
            })}
          </div>
          <Link
            className="flex items-center justify-start pl-5 transition-transform duration-300 cursor-pointer lg:pl-0 group"
            style={{ color: '#3183FF' }}
            to="/"
          >
            <span className="mr-2 ">Explore more</span>
            <RightArrowBlue className="transition duration-300 transform group-hover:translate-x-2" />
          </Link>
        </div>

        <div className="lg:w-1/2">
          <Image
            fluid={image.localFile.childImageSharp.fluid}
            alt="A corgi smiling happily"
          />
        </div>
      </div>
    </section>
  )
}
