import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useMediaQuery from '@mui/material/useMediaQuery';

export const CustomLeftArrow = ({ onClick, ...rest }) => {
	const matches = useMediaQuery('(min-width:575px)');
	const {
		onMove,
		carouselState: { currentSlide, deviceType }
	} = rest;
	// onMove means if dragging or swiping in progress.
	return (
		<div
			onClick={() => onClick()}
			className={`absolute bg-white rounded-full p-3  cursor-pointer drop-shadow-xl left-4 top-[50%] none sm:opacity-95 ${
				matches ? 'flex' : 'hidden'
			}`}
		>
			<ArrowBackIosIcon color='primary' className='pl-1' />
		</div>
	);
};
