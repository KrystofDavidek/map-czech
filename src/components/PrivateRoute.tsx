import { Box, CircularProgress } from '@mui/material';
import { Navigate } from 'react-router';

import useUserContext from '../contexts/UserContext';

const PrivateRoute = ({ children }: any) => {
	const { user, loading } = useUserContext();

	if (loading)
		return (
			<Box
				sx={{
					width: '100%',
					textAlign: 'center',
					pt: '5rem'
				}}
			>
				<CircularProgress size="5rem" />
			</Box>
		);
	return user ? children : <Navigate to={{ pathname: '/login' }} />;
};

export default PrivateRoute;
