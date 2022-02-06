import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CircularProgress,
	Divider,
	List,
	Typography
} from '@mui/material';
import { useEffect } from 'react';

import { useFeatures } from '../contexts/FeaturesContext';
import useAsyncFiles from '../hooks/useAsyncFiles';
import { Feature } from '../models/feature';

const Location = ({ feature }: { feature: Feature }) => {
	const { urls, setNames } = useAsyncFiles(true);

	useEffect(() => {
		setNames(feature.properties.introImage);
	}, []);

	return (
		<Card sx={{ width: '100%', p: '1rem' }}>
			{feature.properties.introImage.length > 0 && (
				// eslint-disable-next-line react/jsx-no-useless-fragment
				<>
					{!urls || urls.length === 0 ? (
						<Box sx={{ width: '70%', textAlign: 'center', pt: '2rem' }}>
							<CircularProgress />
						</Box>
					) : (
						<CardMedia
							component="img"
							height="140"
							image={urls?.[0]}
							alt="intro"
						/>
					)}
				</>
			)}
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{feature.properties.mainLocation}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{feature.properties.secondaryLocation}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Share</Button>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
};

const LocationList = () => {
	const { allFeatures } = useFeatures();

	return (
		<List>
			<Divider />
			{allFeatures.map((feature: Feature) => (
				<>
					<Location key={feature.id} feature={feature} />
					<Divider />
				</>
			))}
		</List>
	);
};

export default LocationList;
