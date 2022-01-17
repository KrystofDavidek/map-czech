import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import SectionNavbar from '../components/Entry/SectionNavbar';
import Intro from '../components/Entry/Intro';
import Details from '../components/Entry/Details';
import Media from '../components/Entry/Media';

import NotFound from './NotFound';

const Entry = () => (
	<>
		<SectionNavbar />
		<Box sx={{ m: 4 }}>
			<Routes>
				<Route path="intro" element={<Intro />} />
				<Route path="details" element={<Details />} />
				<Route path="media" element={<Media />} />
				<Route path="others" element={<Details />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Box>
	</>
);

export default Entry;
