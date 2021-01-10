import React from 'react'
import SupportBlock from '~/components/ui/SupportBlock'

export default function ServiceSection({ supportBlocks }) {
  return (
    <section className="mt-20 mb-24" id="service">
      <div className="container flex flex-col justify-center px-5 mx-auto lg:flex-row">
        {supportBlocks.map(({ heading, text, icon }, i) => (
          <SupportBlock heading={heading} text={text} icon={icon} key={i} />
        ))}
      </div>
    </section>
  )
}
