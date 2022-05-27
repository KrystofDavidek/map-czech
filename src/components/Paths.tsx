import { Routes, Route } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import Map from '../pages/Map';
import Admin from '../pages/Admin';
import Welcome from '../pages/Welcome';
import Entry from '../pages/Entry';
import Login from '../pages/Login';

import PrivateRoute from './PrivateRoute';

const Paths = () => (
	<Routes>
		<Route path="/" element={<Map />} />
		<Route
			path="/admin/:query/"
			element={
				<PrivateRoute>
					<Admin />
				</PrivateRoute>
			}
		/>
		<Route path="/welcome" element={<Welcome />} />
		<Route path="/login" element={<Login />} />
		<Route path="/location/:query/*" element={<Entry />} />
		<Route path="*" element={<NotFound />} />
	</Routes>
);

export default Paths;
