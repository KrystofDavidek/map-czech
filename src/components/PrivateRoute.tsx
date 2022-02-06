import { Navigate } from 'react-router-dom';

import useUserContext from '../contexts/UserContext';

const PrivateRoute = ({ children }: any) => {
	const { user } = useUserContext();

	return user ? children : <Navigate to={{ pathname: '/login' }} />;
};

export default PrivateRoute;
