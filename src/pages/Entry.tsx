import { Route, Routes } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import SectionNavbar from '../components/Entry/SectionNavbar';
import Intro from '../components/Entry/Intro';
import Details from '../components/Entry/Details';
import Media from '../components/Entry/Media';
import Extra from '../components/Entry/Extra';

import NotFound from './NotFound';

const Entry = () => (
	<Container>
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
	</Container>
);

export default Entry;
