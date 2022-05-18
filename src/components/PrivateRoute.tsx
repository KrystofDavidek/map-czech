import { Navigate } from 'react-router';

import useUserContext from '../contexts/UserContext';

import LoadingSpinner from './LoadingSpinner';

const PrivateRoute = ({ children }: any) => {
	const { user, loading } = useUserContext();

	if (loading)
		return (
			<LoadingSpinner
				boxWidth="100%"
				width="5rem"
				height="5rem"
				textAlign="center"
				pt="5rem"
			/>
		);
	return user ? children : <Navigate to={{ pathname: '/login' }} />;
};

export default PrivateRoute;
