import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { useEntries } from '../contexts/EntriesContext';

const Navbar = () => {
	const { setCurrentEntry } = useEntries();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					<Button component={Link} to="/welcome" color="inherit">
						<Typography variant="h6">Krajanská mapa</Typography>
					</Button>
					<Box>
						<Button component={Link} to="/" color="inherit">
							Mapa
						</Button>
						<Button
							component={Link}
							to="/admin/new"
							onClick={() => setCurrentEntry(undefined)}
							color="inherit"
						>
							Editor
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
