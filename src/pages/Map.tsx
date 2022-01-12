import { Stack, Typography } from '@mui/material';

import MapWrapper from '../components/Map/MapWrapper';
import Search from '../components/Search';

const Map = () => (
	<Stack alignItems="center" spacing={2} sx={{ m: 2 }}>
		<Stack direction="row" spacing={2}>
			<Typography variant="h4" component="h1">
				Map
			</Typography>
			<Search />
		</Stack>
		<MapWrapper />
	</Stack>
);

export default Map;
