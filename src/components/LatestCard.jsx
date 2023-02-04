import React from 'react';

export const LatestCard = ({ card }) => {
	return (
		<div className='flex flex-col text-sm text-center shadow-md basis-0 flex-1 min-h-[280px] cursor-pointer'>
			<img
				className='min-h-[100px] lg:min-h-[150px] object-fill '
				src={card.img}
				alt={card.title}
			/>
			<div className=' '>
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
