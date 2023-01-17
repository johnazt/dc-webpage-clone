import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DCLogo from '../assets/dc-logo.svg';

const Nav = () => {
	return (
		<div>
			<nav className='flex justify-between items-center px-4 py-[4px] '>
				<img src={DCLogo} alt='dc-logo' className='h-10 w-10' />
				<div>
					<SearchIcon />
					<MenuIcon className='ml-5 cursor-pointer' />
				</div>
			</nav>
		</div>
	);
};

export default Nav;
