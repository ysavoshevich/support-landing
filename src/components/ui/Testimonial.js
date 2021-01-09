import React from 'react'
import Image from 'gatsby-image'

export default function Testimonial({ text, name, username, avatar }) {
  return (
    <div
      className="p-10 my-10 bg-white cursor-pointer hover:shadow-lg"
      style={{ maxWidth: '450px' }}
    >
      <p>{text}</p>
      <p className="font-bold">{name}</p>
      <div className="flex items-center">
        {avatar && (
          <Image
            fluid={avatar.localFile.childImageSharp.fluid}
            style={{ maxWidth: '45px', minWidth: '45px' }}
          />
        )}

        <p className="ml-2 text-blue-400">@{username}</p>
      </div>
    </div>
  )
}
