import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import Testimonial from '~/components/ui/Testimonial'
import splitArrIntoChunks from '~/utils/splitArrIntoChunks'

export default function TestimonialSection({
  text,
  heading,
  testimonialBlocks,
}) {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: '#FFFCF7' }}
      id="testimonials"
    >
      <div className="container mx-auto">
        <h2 className="text-center text-30px">{text}</h2>
        <p className="text-center">{heading}</p>
      </div>

      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 2,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
      >
        {splitArrIntoChunks(testimonialBlocks, 2).map((chunk, i) => {
          return (
            <SwiperSlide className="px-5 lg:px-0" key={i}>
              {chunk.map(({ text, username, name, avatar }, i) => (
                <Testimonial
                  text={text}
                  username={username}
                  name={name}
                  avatar={avatar}
                  key={i}
                />
              ))}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
