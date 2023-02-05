import React from 'react';

export const SectionVideo = () => (
	<section className='flex flex-col m-auto lg:max-w-[960px] lg:flex-row xl:max-w-[1140px] xxl:max-w-[1320px] mb-16 px-3  h-full max-w-[540px] md:max-w-[720px] xl:gap-7 '>
		<iframe
			className='w-full min-h-[200px] sm:min-h-[310px] xl:w-[57%] xl:min-h-[430px]'
			src='https://www.youtube.com/embed/Q__dO3pEYDU?rel=0'
			allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
			allowFullScreen
		></iframe>
		<div className='lg:self-center'>
			<p className='uppercase font-extrabold tracking-tighter my-4'>
				official Trailer 2
			</p>
			<p className='text-[1.35rem] md:text-[2.2rem] uppercase font-extrabold  mb-3 tracking-tighter scale-y-110'>
				Shazam! fury of the gods
			</p>
			<small className='text-[14px]'>
				It's Time to Grow Up.<i> Shazam! Fury of the Gods</i> - in the theaters
				March 17.
			</small>
		</div>
	</section>
);
