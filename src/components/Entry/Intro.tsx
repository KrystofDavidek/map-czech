import { Stack, Grid, Divider, CircularProgress } from '@mui/material';
import { useMemo } from 'react';

import { useEntries } from '../../contexts/EntriesContext';
import useAsyncFiles from '../../hooks/useAsyncFiles';
import Text from '../Text';

import Image from './Image';

const Intro = () => {
	const { currentEntry } = useEntries();
	const location = useMemo(() => currentEntry?.location, [currentEntry]);
	const { urls } = useAsyncFiles(location?.introImage);

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={6}>
				<Stack spacing={2}>
					<Text variant="h3" component="h1" text={location?.mainLocation} />
					<Text
						variant="h4"
						component="h2"
						text={location?.secondaryLocation}
					/>
					<Divider />
					<Text text={location?.demographic} />
				</Stack>
			</Grid>
			<Grid
				item
				xs={12}
				md={6}
				sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
			>
				{urls?.length === 0 ? (
					<CircularProgress sx={{ height: '20rem' }} />
				) : (
					<Image
						alt="Intro"
						src={urls?.[0]}
						sx={{ maxHeight: '20rem', maxWidth: '100%' }}
					/>
				)}
			</Grid>
		</Grid>
	);
};

export default Intro;
