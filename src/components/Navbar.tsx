import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<Box sx={{ flexGrow: 1 }}>
		<AppBar position="static">
			<Toolbar sx={{ justifyContent: 'space-between' }}>
				<Button component={Link} to="/welcome" color="inherit">
					<Typography variant="h6">Czech Map</Typography>
				</Button>
				<Box>
					<Button component={Link} to="/" color="inherit">
						Map
					</Button>
					<Button component={Link} to="/admin" color="inherit">
						Admin
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	</Box>
);

export default Navbar;
