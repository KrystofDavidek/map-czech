import { Stack, Grid, Divider } from '@mui/material';
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
					<Text variant="h3" component="h1" text={location?.mainLocation} />
					<Text
						variant="h4"
						component="h2"
						text={location?.secondaryLocation}
					/>
					<Divider />
					<Text text={location?.demographic} />
					<Text text={location?.distanceFromPrag?.toString()} />
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
