import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { useEffect } from 'react';

import SectionNavbar from '../components/Entry/SectionNavbar';
import Intro from '../components/Entry/Intro';
import Details from '../components/Entry/Details';
import Media from '../components/Entry/Media';
import Extra from '../components/Entry/Extra';
import { useEntries } from '../contexts/EntriesContext';
import { getEntryByName } from '../utils/firebase';

import NotFound from './NotFound';

const Entry = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { currentEntry, setCurrentEntry, setLoading } = useEntries();

	useEffect(() => {
		const getEntry = async () => {
			const name = location.pathname.split('/')[2];
			const entry = await getEntryByName(name);
			if (entry?.id) {
				setCurrentEntry(entry);
				navigate(location.pathname);
			}
			setLoading(false);
		};

		if (!currentEntry?.id) {
			setLoading(true);
			getEntry();
		}
	}, [location]);

	return (
		<Container sx={{ p: 0 }}>
			<SectionNavbar />
			<Box sx={{ m: { xs: 2, sm: 4 }, pb: 10 }}>
				<Routes>
					<Route path="intro" element={<Intro />} />
					<Route path="details" element={<Details />} />
					<Route path="media" element={<Media />} />
					<Route path="extra" element={<Extra />} />
					<Route path="/" element={<Intro />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Box>
		</Container>
	);
};

export default Entry;
