import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import SectionNavbar from '../components/entry/SectionNavbar';
import Intro from '../components/entry/Intro';
import Details from '../components/entry/Details';
import Media from '../components/entry/Media';
import Extra from '../components/entry/Extra';

import NotFound from './NotFound';

const Entry = () => (
	<>
		<SectionNavbar />
		<Box sx={{ m: 4 }}>
			<Routes>
				<Route path="intro" element={<Intro />} />
				<Route path="details" element={<Details />} />
				<Route path="media" element={<Media />} />
				<Route path="extra" element={<Extra />} />
				<Route path="/" element={<Intro />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Box>
	</>
);

export default Entry;
