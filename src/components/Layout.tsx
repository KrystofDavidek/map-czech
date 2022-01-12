import { Container } from '@mui/material';
import { FC } from 'react';

const Layout: FC = ({ children }) => (
	<Container component="main">{children}</Container>
);

export default Layout;
