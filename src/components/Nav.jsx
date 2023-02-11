import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DCLogo from '../assets/dc-logo.svg';
import { useMediaQuery } from '@mui/material';
import { NavDesktop } from '../components';
import { nav } from '../constants';

export const Nav = () => {
	const matches = useMediaQuery('(min-width:1200px)');
	return (
		<div className='max-w-[720px] m-auto lg:max-w-[960px] xl:max-w-[1140px] xxl:max-w-[1320px]'>
			<nav className='flex justify-between items-center px-3 py-[4px] xl:py-2  pt-[5px]'>
				<div className='xl:flex'>
					<img src={DCLogo} alt='dc-logo' className='h-10 w-10' />
					{matches && <NavDesktop category={nav} />}
				</div>
				<div>
					<SearchIcon />
					<MenuIcon className='ml-5 cursor-pointer' />
				</div>
			</nav>
		</div>
	);
};
