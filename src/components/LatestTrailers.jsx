import React from 'react';
import { latest } from '../constants';
import { LatestCard } from './LatestCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const LatestTrailers = () => {
	return (
		<div className=' mb-4 m-auto px-3 sm:px-0 sm:max-w-[436px] md:max-w-[616px] lg:max-w-[960px] xl:max-w-[1036px] xxl:max-w-[1216px] relative'>
			<div className='relative  sm:mx-4 md:mx-8 lg:mx-2 sm:overflow-hidden '>
				<h2 className='uppercase text-[1.35rem] font-extrabold tracking-tighter md:text-[2.2rem]'>
					latest trailers, clips & more
				</h2>
				<ul className='carousel flex gap-6 pb-6 mt-8 text-sm'>
					{latest.map(card => (
						<LatestCard card={card} key={card.title} />
					))}
				</ul>
			</div>
			<div className='absolute bg-white rounded-full p-3 flex cursor-pointer drop-shadow-xl top-[50%] opacity-0 md:opacity-95 lg:-left-4'>
				<ArrowBackIosIcon color='primary' className='pl-1' />
			</div>
			<div className='absolute bg-white rounded-full p-3 flex cursor-pointer drop-shadow-xl top-[50%] opacity-0 md:opacity-95 lg:-right-4'>
				<ArrowForwardIosIcon color='primary' className='pl-1' />
			</div>
		</div>
	);
};
