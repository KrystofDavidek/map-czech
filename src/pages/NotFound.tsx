import { Box, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

const NotFound = () => (
	<Box
		sx={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		}}
	>
		<WarningIcon sx={{ typography: 'h1' }} />
		<Typography variant="h2">Error</Typography>
		<Typography>Page not found</Typography>
	</Box>
);

export default NotFound;
