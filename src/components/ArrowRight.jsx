import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const ArrowRigth = ({ onClick, ...rest }) => {
	return (
		<div
			onClick={() => onClick()}
			className='absolute bg-white rounded-full p-3 flex cursor-pointer drop-shadow-xl top-[50%] right-4 sm:opacity-95'
		>
			<ArrowForwardIosIcon color='primary' className='pl-1' fontSize='small' />
		</div>
	);
};
