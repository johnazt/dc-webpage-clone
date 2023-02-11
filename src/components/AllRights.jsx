import React from 'react';
import DCLogo from '../assets/dc-logo.svg';

export const AllRights = () => {
	return (
		<div className='bg-black text-white font-bold items-center flex flex-col gap-3 p-4'>
			<div className='flex justify-center pt-5'>
				<img
					src={DCLogo}
					alt='img-footer-links'
					className='w-[75px] h-[75px]'
				/>
			</div>
			<div className='uppercase scale-y-110 tracking-tighter flex justify-center flex-wrap'>
				<a className='px-3 cursor-pointer'>privacy policy</a>
				<span>|</span>
				<a className='px-3 cursor-pointer'>terms</a>
				<span>|</span>
				<a className='px-3 cursor-pointer'>ad choices</a>
				<span>|</span>
				<a className='px-3 cursor-pointer'>accesibility</a>
				<span>|</span>
				<a className='px-3 cursor-pointer'>
					do not sell my personal information
				</a>
			</div>
			<p className='tracking-tighter'>© & ™ DC. ALL RIGHTS RESERVED</p>
		</div>
	);
};
