import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { latest, responsive } from '../constants';
import { LatestCard, CustomLeftArrow, CustomRightArrow } from '../components';

export const LatestTrailers = () => {
	return (
		<div className='sm:mx-4 md:mx-8 lg:mx-2'>
			<h2 className='uppercase text-[1.35rem] font-extrabold tracking-tighter md:text-[2.2rem]'>
				latest trailers, clips & more
			</h2>
			<Carousel
				containerClass={'pb-6 mt-8'}
				responsive={responsive}
				customRightArrow={<CustomRightArrow />}
				customLeftArrow={<CustomLeftArrow />}
			>
				{latest.map((card, index) => (
					<LatestCard card={card} key={index} index={index} />
				))}
			</Carousel>
		</div>
	);
};
