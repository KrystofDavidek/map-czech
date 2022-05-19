import { Stack, Grid, Divider } from '@mui/material';
import { useEffect, useMemo } from 'react';

import { useEntries } from '../../contexts/EntriesContext';
import useAsyncFiles from '../../hooks/useAsyncFiles';
import LoadingSpinner from '../LoadingSpinner';
import Text from '../Text';

import Image from './Image';

const Intro = () => {
	const { currentEntry } = useEntries();
	const location = useMemo(() => currentEntry?.location, [currentEntry]);
	const { urls, setNames } = useAsyncFiles(true);

	useEffect(() => {
		if (currentEntry.location?.introImage)
			setNames(currentEntry.location.introImage);
	}, [currentEntry]);

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
			{location?.introImage.length > 0 && (
				<Grid
					item
					xs={12}
					md={6}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'start'
					}}
				>
					{!urls || !urls[0] ? (
						<LoadingSpinner />
					) : (
						<Image
							alt="Intro"
							src={urls?.[0]}
							sx={{ maxHeight: '20rem', maxWidth: '100%' }}
						/>
					)}
				</Grid>
			)}
		</Grid>
	);
};

export default Intro;
