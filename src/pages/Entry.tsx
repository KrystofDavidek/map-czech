import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import SectionNavbar from '../components/Entry/SectionNavbar';
import Intro from '../components/Entry/Intro';
import Details from '../components/Entry/Details';

import NotFound from './NotFound';

const Entry = () => {
	const [entryPath, setEntryPath] = useState('');
	const location = useLocation();

	useEffect(() => {
		setEntryPath(location.pathname);
	}, []);

	return (
		<>
			<SectionNavbar entryPath={entryPath} />
			<Routes>
				<Route path="intro" element={<Intro />} />
				<Route path="details" element={<Details />} />
				<Route path="media" element={<Details />} />
				<Route path="others" element={<Details />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default Entry;
