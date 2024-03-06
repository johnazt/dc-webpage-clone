import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { getToKnow } from '../constants'
import { ArrowLeft, ArrowRigth } from '../components'
import useMediaQuery from '@mui/material/useMediaQuery'

export const GetToKnow = () => {
  const matches = useMediaQuery('(min-width:992px)')
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 962 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 962, min: 765 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 765, min: 575 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1
    }
  }

  return (
    <div className='mb-16'>
      <Carousel
        responsive={responsive}
        showDots
        infinite
        autoPlay
        autoPlaySpeed={3000}
        dotListClass='dots'
        customRightArrow={<ArrowRigth />}
        customLeftArrow={<ArrowLeft />}
			>
        {getToKnow.map((slide, index) =>
          <div
            className='w-full bg-cover min-h-[60vh] bg-center flex justify-center items-center text-white before:bg-gradient-to-t before:from-black before:to-black-opacity-5  before:absolute before:inset-0
                        '
            style={{
              backgroundImage: `url('${slide.img}')`
            }}
            key={index}
					>
            <div className='mb-4 mx-auto flex items-center flex-col lg:min-w-[946px] lg:items-start xl:min-w-[1020px] xxl:min-w-[1200px]'>
              <p className='uppercase text-lg tracking-[3px] font-semibold  mb-8 opacity-70'>
								Get to Know
							</p>
              <p className='uppercase text-2xl font-extrabold tracking-tighter opacity-90 mb-8 scale-y-110 md:text-5xl md:mb-3'>
                {slide.name}
              </p>
              <p className='font-semibold z-40 max-w-[39%] leading-9 mb-10 text-white opacity-80'>
                {matches && slide.text}
              </p>
              <button className='text-xs  border-2 rounded-full px-9 py-2 uppercase font-bold scale-y-110 opacity-90 tracking-tighter cursor-pointer hover:bg-blue-500 hover:border-transparent transition'>
                {slide.button}
              </button>
            </div>
          </div>
				)}
      </Carousel>
    </div>
  )
}
