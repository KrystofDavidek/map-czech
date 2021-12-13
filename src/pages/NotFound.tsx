import { Stack, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

const NotFound = () => (
	<Stack alignItems="center">
		<WarningIcon sx={{ typography: 'h1' }} />
		<Typography variant="h2">Error</Typography>
		<Typography>Page not found</Typography>
	</Stack>
);

export default NotFound;
