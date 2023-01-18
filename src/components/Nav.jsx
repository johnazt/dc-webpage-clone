import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DCLogo from '../assets/dc-logo.svg';

export const Nav = () => {
	return (
		<div className='max-w-[720px] m-auto lg:max-w-[960px] xl:max-w-[1140px] xxl:max-w-[1320px]'>
			<nav className='flex justify-between items-center px-3 py-[4px] xl:pb-3 pt-[5px]'>
				<img src={DCLogo} alt='dc-logo' className='h-10 w-10' />
				<div>
					<SearchIcon />
					<MenuIcon className='ml-5 cursor-pointer' />
				</div>
			</nav>
		</div>
	);
};
