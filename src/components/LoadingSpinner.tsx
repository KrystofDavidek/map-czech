import { Box, CircularProgress } from '@mui/material';

const LoadingSpinner = ({ ...props }) => (
	<Box
		sx={{
			...props,
			width: props.boxWidth ? `${props.boxWidth} !important` : ''
		}}
	>
		<CircularProgress
			sx={{
				height: props.height ? `${props.height} !important` : '',
				width: props.width ? `${props.width} !important` : ''
			}}
		/>
	</Box>
);

export default LoadingSpinner;
