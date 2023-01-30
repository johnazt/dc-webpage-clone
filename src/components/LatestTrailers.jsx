import React from 'react';
import { latest } from '../constants';
import { LatestCard } from './LatestCard';

export const LatestTrailers = () => {
	console.log(latest);
	return (
		<div
			className=' mb-4 m-auto px-3 sm:px-0
        sm:max-w-[436px]
         md:max-w-[616px]
         lg:max-w-[856px]
         xl:max-w-[1036px]
         xxl:max-w-[1216px]
         '
		>
			<h2 className='uppercase text-[1.35rem] font-extrabold tracking-tighter md:text-[2.2rem]'>
				latest trailers, clips & more
			</h2>

			<div>
				{latest.map(card => (
					<LatestCard card={card} />
				))}
			</div>
		</div>
	);
};
