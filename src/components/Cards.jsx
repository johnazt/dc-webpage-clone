import React from 'react';
import { cards } from '../constants';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Cards = () => {
	const matches = useMediaQuery('(min-width:575px)');

	return (
		<div className='max-w-[720px] m-auto lg:max-w-[960px] xl:max-w-[1140px] xxl:max-w-[1320px]'>
			<div className='px-3 grid sm:grid-cols-2 gap-4'>
				{cards.map(({ imgDesk, imgMob, title, small, textBtn }) => (
					<div key={title} className='text-center border-2 border-red-400'>
						<img
							src={matches ? imgDesk : imgMob}
							className='min-h-[285px] mb-4'
						/>
						<small className='tracking-widest text-gray-500 my-4 inline-block'>
							{small}
						</small>
						<p className='text-2xl font-extrabold uppercase max-w-md m-auto mb-20 tracking-tighter'>
							{title}
						</p>
						<a
							href='#'
							className='inline-block font-semibold text-sm tracking-[-1px] border-[1px] border-black rounded-full py-4 px-8 mb-9 cursor-pointer'
						>
							{textBtn}
						</a>
					</div>
				))}
			</div>
		</div>
	);
};
