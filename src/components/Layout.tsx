import { Box, Container } from '@mui/material';
import { FC } from 'react';

import Navbar from './Navbar';

const Layout: FC = ({ children }) => (
	<Box>
		<Navbar />
		<Container component="main">{children}</Container>
	</Box>
);

export default Layout;
