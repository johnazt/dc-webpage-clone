import React from 'react';
import HomeMobile from '../assets/imgs/home-dc-mobile.avif';
import HomeDesktop from '../assets/imgs/home-dc.avif';
import useMediaQuery from '@mui/material/useMediaQuery';

const Home = () => {
	const matches = useMediaQuery('(min-width:575px)');

	console.log(matches);
	return (
		<div>
			<img
				src={matches ? HomeDesktop : HomeMobile}
				alt='home-img'
				className='min-h-full'
			/>
		</div>
	);
};

export default Home;
