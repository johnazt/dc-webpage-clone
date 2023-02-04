import React from 'react';
import { latest, responsive } from '../constants';
import { LatestCard } from './LatestCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomRightArrow } from './CustomRightArrow';
import { CustomLeftArrow } from './CustomLeftArrow';

export const LatestTrailers = () => {
	return (
		<div className=' mb-4 m-auto px-3 sm:px-0 sm:max-w-[436px] md:max-w-[616px] lg:max-w-[960px] xl:max-w-[1036px] xxl:max-w-[1216px] relative'>
			<div className='relative sm:mx-4 md:mx-8 lg:mx-2 sm:overflow-hidden '>
				<h2 className='uppercase text-[1.35rem] font-extrabold tracking-tighter md:text-[2.2rem]'>
					latest trailers, clips & more
				</h2>
				<Carousel
					containerClass={'flex pb-6 mt-8'}
					itemClass={'px-3'}
					responsive={responsive}
					customRightArrow={<CustomRightArrow />}
					customLeftArrow={<CustomLeftArrow />}
				>
					{latest.map(card => (
						<LatestCard card={card} key={card.title} />
					))}
				</Carousel>
			</div>
		</div>
	);
};
