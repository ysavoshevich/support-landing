import React from 'react'
import InputWithButton from '~/components/ui/InputWithButton'

export default function HeroSection({
  title,
  text,
  inputPlaceholder,
  buttonText,
  sponsors,
  image,
}) {
  return (
    <section className="w-screen lg:h-screen bg-veryLightOrange" id="hero">
      <div className="container flex flex-col items-center justify-center h-full p-5 mx-auto xl:flex-row xl:p-0">
        <div className="flex flex-col items-center lg:items-start xl:w-1/2 md:px-12 xl:px-10">
          <h1 className="px-2 mt-24 mb-2 text-left xl:px-0 md:mt-32 md:text-center xl:mt-0 xl:text-left text-64px mb-7">
            {title}
          </h1>
          <p className="px-2 mb-6 text-left md:text-center xl:text-left text-18px md:px-8 xl:px-0">
            {text}
          </p>
          <InputWithButton
            btnText={buttonText}
            inputPlaceholder={inputPlaceholder}
          />
          <div className="flex flex-wrap items-center self-start px-2 mt-8 md:self-center ">
            <p className="mr-2 text-grey opacity-60 text-18px">Sponsored by:</p>
            <img
              className="w-12 mr-4 md:w-24"
              src={sponsors[0].url}
              alt="sdf"
            ></img>
            <img
              className="w-12 mr-4 md:w-24"
              src={sponsors[1].url}
              alt="sdf"
            ></img>
            <img
              className="w-12 mr-4 md:w-24"
              src={sponsors[2].url}
              alt="sdf"
            ></img>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <img
            className="max-w-xs p-5 sm:max-w-md lg:max-w-xl"
            src={image.url}
            alt="sdf"
          ></img>
        </div>
      </div>
    </section>
  )
}
