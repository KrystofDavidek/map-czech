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
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useEntries } from '../contexts/EntriesContext';
import { useFeatures } from '../contexts/FeaturesContext';
import { defaultEntry } from '../data';
import useAsyncFiles from '../hooks/useAsyncFiles';
import { Entry } from '../models/entry';
import { Feature } from '../models/feature';
import { getEntry } from '../utils/firebase';

const Location = ({ feature }: { feature: Feature }) => {
	const { setZoomTo } = useFeatures();
	const { urls, setNames } = useAsyncFiles(true);
	const { setCurrentEntry } = useEntries();
	const [loadEntry, setLoadEntry] = useState(false);
	const [entry, setEntry] = useState<Entry>(defaultEntry);

	const navigate = useNavigate();

	useEffect(() => {
		setNames(feature.properties.introImage);
	}, []);

	useEffect(() => {
		if (loadEntry) {
			const getData = async () => {
				const entry = await getEntry(feature.id);
				if (entry) {
					setEntry(entry);
				}
			};
			getData();
		}
	}, [loadEntry]);

	useEffect(() => {
		if (entry.id) {
			setLoadEntry(false);
			setCurrentEntry(entry);
			setZoomTo(feature.geometry.coordinates);
			navigate(`/location/${entry.location.mainLocation}`);
		}
	}, [entry]);

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
				<Button
					onClick={() => {
						setZoomTo(feature.geometry.coordinates);
					}}
					size="small"
				>
					Zobrazit na mapě
				</Button>
				<Button
					onClick={() => {
						setLoadEntry(true);
					}}
					size="small"
				>
					Zobrazit detaily
				</Button>
			</CardActions>
		</Card>
	);
};

const LocationList = () => {
	const { features } = useFeatures();

	return (
		<List>
			<Divider />
			{features.map((feature: Feature) => (
				<Box key={feature.id}>
					<Location feature={feature} />
					<Divider />
				</Box>
			))}
		</List>
	);
};

export default LocationList;
