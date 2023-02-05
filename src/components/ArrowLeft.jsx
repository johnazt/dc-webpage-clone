import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const ArrowLeft = ({ onClick, ...rest }) => {
	return (
		<div
			onClick={() => onClick()}
			className='absolute bg-white rounded-full p-3 flex cursor-pointer drop-shadow-xl top-[50%] left-4 sm:opacity-95'
		>
			<ArrowBackIosIcon color='primary' className='pl-1' fontSize='small' />
		</div>
	);
};
