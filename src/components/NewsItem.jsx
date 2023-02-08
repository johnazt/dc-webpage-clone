import React from 'react';

export const NewsItem = ({ card }) => {
	return (
		<>
			<img src={card.img} alt={card.title} />
			<div className='flex flex-col items-center h-[200px] pb-4'>
				<small className='font-semibold uppercase tracking-widest text-gray-600 my-4 inline-block'>
					{card.small}
				</small>
				<p className='text-[1.2rem] text-center uppercase font-extrabold py-3 tracking-tighter leading-5 lg:text-[1.4rem] scale-y-110'>
					{card.title}
				</p>
				<button
					className='mt-auto text-xs  border-[1px] 
				border-black rounded-full px-6 py-3 uppercase font-bold scale-y-110 tracking-tighter cursor-pointer hover:bg-blue-500 hover:text-white hover:border-transparent transition'
				>
					{card.btnText}
				</button>
			</div>
		</>
	);
};
