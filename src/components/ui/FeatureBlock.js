import React from 'react'
import RightArrow from '~/assets/images/right-arrow.svg'

export default function FeatureBlock({ heading, text, active }) {
  if (!active) {
    return (
      <div className="flex items-center justify-between p-5 my-5 rounded-md bg-lightGrey">
        <h3 className="text-16px">{heading}</h3>
        <RightArrow />
      </div>
    )
  }
  return (
    <div className="p-5 shadow-feature">
      <h3 className="font-semibold text-16px">{heading}</h3>
      <p className="text-15px">{text}</p>
    </div>
  )
}
