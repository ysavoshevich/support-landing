import React from 'react'
import RightArrow from '~/assets/images/right-arrow.svg'

export default function SupportBlock({ heading, text, icon }) {
  return (
    <div className="flex flex-col px-5 py-5 mb-5 transition-all duration-500 lg:px-10 lg:py-12 lg:flex-row lg:mb-0 lg:mr-5 lg:w-5/12 bg-lightGrey hover:bg-white hover:shadow-service">
      <img
        className="self-start mr-4"
        style={{ minWidth: '60px', minHeight: '60px' }}
        src={icon.url}
        alt="sdf"
      ></img>
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <h2 className="text-20px">Do you need help support</h2>
          <RightArrow />
        </div>
        <p className="text-15px">
          Get your website ads tests delivered at let collect sample from the
          victory of the update managments services.
        </p>
      </div>
    </div>
  )
}
