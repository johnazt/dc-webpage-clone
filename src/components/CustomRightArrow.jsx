import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const CustomRightArrow = ({ onClick, ...rest }) => {
	const {
		onMove,
		carouselState: { currentSlide, deviceType }
	} = rest;
	// onMove means if dragging or swiping in progress.
	return (
		<div
			onClick={() => onClick()}
			className='absolute bg-white rounded-full p-3 flex cursor-pointer drop-shadow-xl top-[50%] right-4 opacity-0 sm:opacity-95'
		>
			<ArrowForwardIosIcon color='primary' className='pl-1' />
		</div>
	);
};
