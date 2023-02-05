import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { godCards } from '../constants';
import { GodsCard, CustomLeftArrow, CustomRightArrow } from '../components';

export const GodsMonster = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 962 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 962, min: 575 },
			items: 3
		},
		mobile: {
			breakpoint: { max: 575, min: 0 },
			items: 2
		}
	};

	return (
		<div className='sm:mx-4 md:mx-8 lg:mx-2 relative mb-16'>
			<h2 className='uppercase text-[1.35rem] font-extrabold tracking-tighter md:text-[2.2rem] scale-y-110'>
				READ UP ON DC STUDIOS' GODS & MONSTERS
			</h2>
			<Carousel
				containerClass='ml-[-.75em] mt-8'
				customLeftArrow={<CustomLeftArrow />}
				customRightArrow={<CustomRightArrow />}
				responsive={responsive}
				itemClass='px-3'
			>
				{godCards.map((card, index) => (
					<GodsCard card={card} key={index} />
				))}
			</Carousel>
		</div>
	);
};
