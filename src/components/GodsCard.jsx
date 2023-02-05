import React from 'react';

export const GodsCard = ({ card }) => {
	return (
		<div>
			<img src={card.img} alt='' />
			<p className='text-[1.2rem] text-center uppercase font-extrabold py-3 tracking-tighter h-full leading-5 lg:text-[1.4rem] scale-y-110'>
				{card.title}
			</p>
		</div>
	);
};
