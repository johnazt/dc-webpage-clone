import React from 'react';

export const JoinDC = () => {
	return (
		<div className='flex flex-col text-white bg-gradient-to-r from-[#2a0541] to-[#5816bd] lg:flex-row px-11 pt-6'>
			<div>
				<p className='uppercase text-[1.35rem] pb-4 font-extrabold tracking-tighter md:text-[2.2rem] scale-y-110 md:text-5xl'>
					JOIN THE DC UNIVERSE
				</p>
				<p className='text-sm leading-6 font-semibold opacity-90 mb-4'>
					Register for FREE to access member-exclusive content and activities,
					read FREE comics from DC UNIVERSE INFINITE, and get alerts and early
					access to exclusive products from DC Shop!{' '}
				</p>
				<button className='border-[1px] border-white rounded-full px-6 py-3 text-sm uppercase font-semibold tracking-tighter cursor-pointer hover:bg-blue-500 hover:border-transparent transition'>
					Sign Up Now
				</button>
			</div>
			<img
				className='f'
				src='https://static.dc.com/2022-06/DC_Peacemaker_RegBan_cutout.png?w=700'
				alt=''
			/>
		</div>
	);
};
