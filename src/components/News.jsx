import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { news } from '../constants';
import { CustomLeftArrow, CustomRightArrow, NewsItem } from '../components';

export const News = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 962 },
			items: 3
		},
		desktop: {
			breakpoint: { max: 962, min: 765 },
			items: 2
		},
		tablet: {
			breakpoint: { max: 765, min: 575 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 575, min: 0 },
			items: 1
		}
	};

	return (
		<div className='mb-16 m-auto px-3 sm:px-0 sm:max-w-[436px] md:max-w-[616px] lg:max-w-[960px] xl:max-w-[1036px] xxl:max-w-[1216px]'>
			<div className='sm:mx-4 md:mx-8 lg:mx-2 relative '>
				<h2 className='uppercase text-[1.35rem] font-extrabold tracking-tighter md:text-[2.2rem] scale-y-110'>
					NEWS FROM AROUND THE MULTIVERSE
				</h2>
				<Carousel
					containerClass='ml-[-.75em] mt-8'
					responsive={responsive}
					itemClass='px-3'
					customLeftArrow={<CustomLeftArrow />}
					customRightArrow={<CustomRightArrow />}
				>
					{news.map(card => (
						<NewsItem card={card} key={card.title} />
					))}
				</Carousel>
			</div>
		</div>
	);
};
