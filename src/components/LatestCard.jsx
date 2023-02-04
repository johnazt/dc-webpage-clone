import React from 'react';

export const LatestCard = ({ card, index }) => {
	return (
		<div
			className={`flex flex-col text-sm text-center shadow-md cursor-pointer h-full mr-4
			}`}
		>
			<img src={card.img} alt={card.title} />
			<>
				<small className='tracking-widest text-gray-600 my-4 inline-block'>
					{card.category}
				</small>
				<p className='uppercase font-extrabold px-2 pb-5 tracking-tighter '>
					{card.title}
				</p>
			</>
		</div>
	);
};
