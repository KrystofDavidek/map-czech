import { Box, Container } from '@mui/material';
import { FC } from 'react';

const Layout: FC = ({ children }) => (
	<Container
		sx={{
			height: '100vh'
		}}
	>
		<Box component="main">{children}</Box>
	</Container>
);

export default Layout;
