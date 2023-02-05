import React from 'react';
import { LatestTrailers, GodsMonster, GetToKnow } from '../components';

export const Sliders = () => {
	return (
		<div>
			<div className='mb-4 m-auto px-3 sm:px-0 sm:max-w-[436px] md:max-w-[616px] lg:max-w-[960px] xl:max-w-[1036px] xxl:max-w-[1216px]'>
				<LatestTrailers />
				<GodsMonster />
			</div>
			<GetToKnow />
		</div>
	);
};
