import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const CustomLeftArrow = ({ onClick, ...rest }) => {
	const {
		onMove,
		carouselState: { currentSlide, deviceType }
	} = rest;
	// onMove means if dragging or swiping in progress.
	return (
		<div
			onClick={() => onClick()}
			className='absolute bg-white rounded-full p-3 flex cursor-pointer drop-shadow-xl left-4 top-[40%] opacity-0 sm:opacity-95 '
		>
			<ArrowBackIosIcon color='primary' className='pl-1' />
		</div>
	);
};
