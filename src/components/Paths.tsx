import { Routes, Route } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import Map from '../pages/Map';

const Paths = () => (
	<Routes>
		<Route path="/" element={<Map />} />
		<Route path="*" element={<NotFound />} />
	</Routes>
);

export default Paths;
