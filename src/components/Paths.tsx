import { Routes, Route } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import Map from '../pages/Map';
import Admin from '../pages/Admin';
import Welcome from '../pages/Welcome';

const Paths = () => (
	<Routes>
		<Route path="/" element={<Map />} />
		<Route path="/admin" element={<Admin />} />
		<Route path="/welcome" element={<Welcome />} />
		<Route path="*" element={<NotFound />} />
	</Routes>
);

export default Paths;
