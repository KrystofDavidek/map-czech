import { Box, Stack, Grid, Divider } from '@mui/material';
import { useMemo } from 'react';

import { useEntries } from '../../contexts/EntriesContext';

import Text from './Text';
import Image from './Image';

const Intro = () => {
	const { currentEntry } = useEntries();
	const location = useMemo(() => currentEntry?.location, [currentEntry]);

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={6}>
				<Stack spacing={2}>
					<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
						<Text
							sx={{ mr: 2 }}
							variant="h3"
							component="h1"
							text={location?.mainLocation}
						/>
						<Text
							variant="h5"
							component="h2"
							text={location?.secondaryLocation}
						/>
					</Box>
					<Divider />
					<Text text={location?.demographic} />
					<Text text={location?.distanceFromPrag} />
				</Stack>
			</Grid>
			<Grid item xs={12} md={6}>
				<Image
					alt="Intro"
					src={`../../assets/images/${currentEntry?.location?.introImage}`}
					sx={{ maxHeight: '20rem', maxWidth: '100%' }}
				/>
			</Grid>
		</Grid>
	);
};

export default Intro;
