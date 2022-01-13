import { Stack } from '@mui/material';

import MapWrapper from '../components/Map/MapWrapper';
import Search from '../components/Search';

const Map = () => (
	<Stack alignItems="center" spacing={2} sx={{ m: 2 }}>
		<Search />
		<MapWrapper />
	</Stack>
);

export default Map;
