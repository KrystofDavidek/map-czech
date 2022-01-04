import { Stack, Typography } from '@mui/material';

import MapWrapper from '../components/Map/MapWrapper';

const Map = () => (
	<Stack alignItems="center" sx={{ paddingTop: '1rem' }}>
		<Typography variant="h4" component="h1" sx={{ paddingBottom: '2rem' }}>
			Map
		</Typography>
		<MapWrapper />
	</Stack>
);

export default Map;
