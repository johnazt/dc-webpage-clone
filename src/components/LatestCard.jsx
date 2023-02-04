import React from 'react';

export const LatestCard = ({ card }) => {
	return (
		<div className='flex flex-col  text-center shadow-md basis-0 flex-1 min-w-[200px] lg:min-w-[280px] pb-5'>
			<img
				className='min-h-[100px] lg:min-h-[150px] object-fill basis-0 flex-grow-1'
				src={card.img}
				alt={card.title}
			/>

			<div className='basis-0 flex-grow-1 '>
				<small className='tracking-widest text-gray-600 my-4 inline-block'>
					{card.category}
				</small>
				<p className='uppercase font-extrabold  px-2 tracking-tighter overflow-hidden'>
					{card.title}
				</p>
			</div>
		</div>
	);
};
