import React from 'react'
import { cards } from '../constants'
import useMediaQuery from '@mui/material/useMediaQuery'

export const Cards = () => {
  const matches = useMediaQuery('(min-width:575px)')

  return (
    <div className='px-3 py-14 grid sm:grid-cols-2 gap-6 max-w-[540px] md:max-w-[720px] lg:grid-cols-4 m-auto lg:max-w-[960px] xl:max-w-[1140px] xxl:max-w-[1320px]'>
      {cards.map(({ imgDesk, imgMob, title, small, textBtn }) =>
        <div
          key={title}
          className='text-center flex flex-col items-center justify-between shadow-gray-300 shadow-lg relative'
				>
          <a target='_self' className='absolute inset-0 z-30 cursor-pointer' />
          <div>
            <picture>
              <source media='(min-width: 768px)' srcset={imgDesk} />
              <img
                src={imgMob}
                alt='Descripción'
                className='min-h-[285px] mb-4'
                style={{
                  clipPath: 'polygon(0px 0px, 100% 0px, 100% 88%, 0px 99%)'
                }}
							/>
            </picture>

            <small className='tracking-widest text-gray-600 my-4 inline-block'>
              {small}
            </small>
            <p className='text-[1.45rem] uppercase font-extrabold mx-auto mb-16 px-2 tracking-tighter scale-y-110'>
              {title}
            </p>
          </div>
          <a className='z-40 font-semibold text-sm tracking-[-1px] border-[1px] border-black rounded-full py-3 px-8 cursor-pointer mb-9 hover:bg-blue-500 hover:text-white hover:border-transparent transition duration-300 ease-in-out'>
            {textBtn}
          </a>
        </div>
			)}
    </div>
  )
}
