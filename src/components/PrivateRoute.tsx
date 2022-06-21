import { Navigate } from 'react-router';

import useUserContext from '../contexts/UserContext';

import LoadingSpinner from './LoadingSpinner';

const PrivateRoute = ({ children }: any) => {
	const { user, loading } = useUserContext();

	if (loading)
		return (
			<LoadingSpinner
				boxWidth="100%"
				height="10rem"
				width="10rem"
				textAlign="center"
				pt={{ xs: '10rem', sm: '20rem' }}
			/>
		);
	return user ? children : <Navigate to={{ pathname: '/login' }} />;
};

export default PrivateRoute;
