import React from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export const NavOptions = ({ options }) => {
	return (
		<div className='absolute flex flex-col items-center top-14 z-30 bg-white rounded-lg p-5 min-w-[200px] -left-14 gap-6'>
			<ArrowDropUpIcon
				className='absolute -top-9 text-white'
				style={{ fontSize: '3.7rem' }}
			/>
			{options.map((item, index) => (
				<a
					key={index}
					className='text-black  hover:text-blue-500 transition self-start tracking-tighter '
				>
					{item}
				</a>
			))}
		</div>
	);
};
