import React from 'react'
import PricingBlock from '../ui/PricingBlock'

export default function PricingSection({ heading, text, pricingBlocks }) {
  return (
    <section style={{ backgroundColor: '#F9FAFC' }} id="pricing">
      <div className="container flex flex-col items-center justify-center mx-auto">
        <h1 className="mt-10 text-30px">{heading}</h1>
        <p className="mt-5 mb-20 " style={{ color: '#858B91' }}>
          {text}
        </p>
        <div className="flex flex-col justify-center mb-32 lg:flex-row">
          {pricingBlocks.map((block, i) => (
            <PricingBlock
              key={i}
              text={block.text}
              heading={block.heading}
              price={block.price}
              negativePoints={block.negativePoints}
              positivePoints={block.positivePoints}
              primary={i === 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
