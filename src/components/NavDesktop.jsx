import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavOptions } from '../components';
import { useState } from 'react';

export const NavDesktop = ({ category }) => {
	const [hoveredItem, setHoveredItem] = useState(null);

	return (
		<ul className='flex items-center gap-8 font-bold uppercase text-[13px] ml-14 tracking-tighter  '>
			{category.map((item, index) => (
				<li
					key={index}
					className='flex items-center hover:text-blue-500 transition cursor-pointer relative'
					onMouseEnter={() =>
						setHoveredItem(item.options.length > 0 ? item : null)
					}
					onMouseLeave={() => setHoveredItem(null)}
				>
					{item.category}
					{item.options.length > 0 && <ArrowDropDownIcon />}
					{hoveredItem === item && <NavOptions options={item.options} />}
				</li>
			))}
		</ul>
	);
};
