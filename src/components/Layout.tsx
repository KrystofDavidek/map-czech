import { Box, styled } from '@mui/material';
import { FC } from 'react';

import { useDrawer } from '../contexts/DrawerContext';
import { useEntries } from '../contexts/EntriesContext';

import LoadingSpinner from './LoadingSpinner';
import Navbar from './Navbar';

export const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })<{
	open?: boolean;
}>(({ theme, open }) => ({
	flexGrow: 1,
	padding: theme.breakpoints.down('sm') ? theme.spacing(1) : theme.spacing(3),
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	marginLeft: `-${drawerWidth}px`,
	...(open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	})
}));

const Layout: FC = ({ children }) => {
	const { open } = useDrawer();
	const { isLoading } = useEntries();

	return (
		<Box>
			{isLoading ? (
				<LoadingSpinner
					boxWidth="100%"
					height="10rem"
					width="10rem"
					textAlign="center"
					pt={{ xs: '10rem', sm: '20rem' }}
				/>
			) : (
				<>
					<Navbar />
					<Main open={open}>
						<Box sx={{ height: '89vh', ml: `${drawerWidth}px` }}>
							{children}
						</Box>
					</Main>
				</>
			)}
		</Box>
	);
};

export default Layout;
