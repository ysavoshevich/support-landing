import React from 'react'
import TextWithCheckmark from '~/components/ui/TextWithIcon'

export default function PricingBlock({
  primary,
  text,
  heading,
  price,
  negativePoints,
  positivePoints,
}) {
  const defaultClassnames = 'px-10 py-12 bg-white lg:w-5/12'
  const primaryClassnames =
    'px-10 py-16 mt-5 transform bg-white lg:mt-0 lg:scale-110 lg:w-5/12 shadow-premiumPack'
  return (
    <div className={primary ? primaryClassnames : defaultClassnames}>
      <h3 className="text-22px">{heading}</h3>
      <p className="mb-5 text-regularOrange">{price}</p>
      <p
        className="pb-8 pr-16 mb-5 border-b"
        style={{ color: '#343D48', opacity: 0.65 }}
      >
        {text}
      </p>
      <div className="pr-16">
        {positivePoints.map((point, i) => (
          <TextWithCheckmark key={i} type={'orange'} text={point} />
        ))}
        {negativePoints.map((point, i) => (
          <TextWithCheckmark key={i} type={'cancel'} text={point} />
        ))}
      </div>
    </div>
  )
}
