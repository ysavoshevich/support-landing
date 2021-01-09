import React from 'react'

export default function InputWithButton({
  type,
  btnText,
  inputPlaceholder,
  responsiveFullWidth,
}) {
  return (
    <form
      className={`flex ${
        responsiveFullWidth && 'flex-col'
      }  items-center justify-start md:justify-center w-full xl:flex-row xl:justify-start `}
    >
      <input
        className={`${
          responsiveFullWidth
            ? 'w-full text-left xl:w-4/6'
            : 'w-4/6 text-center'
        }    px-4 xl:px-0 xl:pl-5  md:px-5 text-xs md:text-sm h-10 md:h-12 xl:h-12  xl:text-left xl:py-6 xl:mr-0 rounded-md shadow-heroInput focus:shadow-inputOrange focus:border-orange-400 outline-none ${
          type === 'dark' && 'placeholder-veryLightOrange'
        }`}
        style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
        placeholder={inputPlaceholder}
      />
      <button
        className={`${
          responsiveFullWidth ? 'w-full xl:w-auto mt-4 xl:ml-2' : 'ml-2'
        }  px-4 md:px-8 h-10 md:h-12 xl:h-12 md:py-2 xl:px-6 transition-colors duration-300 text-xs md:text-sm xl:text-base hover:bg-darkBlue text-white
        rounded-md xl:mt-0 bg-regularOrange`}
      >
        {btnText}
      </button>
    </form>
  )
}
