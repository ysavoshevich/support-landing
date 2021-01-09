import React from 'react'
import InputWithButton from '~/components/ui/InputWithButton'

export default function GetNotifiedSection({
  heading,
  text,
  inputPlaceholder,
  buttonText,
}) {
  return (
    <section className="px-5 py-24" style={{ backgroundColor: '#353448' }}>
      <div className="container flex flex-col items-center justify-center mx-auto">
        <h2 className="mb-5 text-center text-white text-30px">{heading}</h2>
        <p className="mb-12 text-center text-white opacity-75 ">{text}</p>
        <div className="w-full mx-auto" style={{ maxWidth: '550px' }}>
          <InputWithButton
            type="dark"
            btnText={buttonText}
            inputPlaceholder={inputPlaceholder}
            responsiveFullWidth={true}
          />
        </div>
      </div>
    </section>
  )
}
