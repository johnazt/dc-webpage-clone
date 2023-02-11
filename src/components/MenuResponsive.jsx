import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const MenuResponsive = ({ category, menuResponsive }) => {
	return (
		<div
			className={
				menuResponsive
					? `h-full fixed bottom-0 left-0 right-0 top-12 translate-y-0 opacity-100 -z-40 transition bg-white duration-300`
					: `h-full fixed  duration-100 -translate-y-[110%] -z-40 opacity-0 left-0 right-0`
			}
		>
			<div className=' h-full  border-t-gray-400 border-2'>
				<ul className='flex flex-col gap-8 font-bold uppercase text-[14px]  tracking-[-1.5px]  border-b-black border-[1px] p-4 '>
					{category.map(item => (
						<span className='cursor-pointer hover:text-blue-500 inline-block'>
							{item.category}
							{item.options.length > 0 && <ArrowDropDownIcon />}
						</span>
					))}
				</ul>
				<div className='flex p-8 justify-center gap-4 font-bold '>
					<button className='w-full border-black rounded-full px-20 py-3 border-[1px] tracking-[-1.5px] text-[14px] hover:bg-blue-500 hover:text-white hover:border-transparent transition'>
						SIGN UP
					</button>
					<button className='w-full border-black rounded-full px-20 py-3 border-[1px] tracking-[-1.5px] text-[14px] hover:bg-blue-500 hover:text-white hover:border-transparent transition'>
						LOG IN
					</button>
				</div>
			</div>
		</div>
	);
};
