import { Stack, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

const NotFound = () => (
	<Stack alignItems="center" sx={{ m: 4 }} spacing={2}>
		<WarningIcon sx={{ typography: 'h1' }} />
		<Typography variant="h2">Error</Typography>
		<Typography>
			Stránka nenalezena, buď nejste přihlášeni anebo neexistuje.
		</Typography>
	</Stack>
);

export default NotFound;
