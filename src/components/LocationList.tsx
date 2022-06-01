import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
	IconButton,
	List,
	Stack,
	Theme,
	Tooltip,
	Typography,
	useMediaQuery
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import { border } from '@mui/system';

import { useEntries } from '../contexts/EntriesContext';
import { useFeatures } from '../contexts/FeaturesContext';
import { defaultEntry } from '../data';
import useAsyncFiles from '../hooks/useAsyncFiles';
import { Entry } from '../models/entry';
import { Feature } from '../models/feature';
import { getEntry } from '../utils/firebase';
import useUserContext from '../contexts/UserContext';

import LoadingSpinner from './LoadingSpinner';

const Location = ({
	feature,
	setDrawerOpen
}: {
	feature: Feature;
	setDrawerOpen: any;
}) => {
	const { setZoomTo } = useFeatures();
	const { urls, setNames } = useAsyncFiles(true);
	const { setCurrentEntry } = useEntries();
	const [loadEntry, setLoadEntry] = useState(false);
	const [entry, setEntry] = useState<Entry>(defaultEntry);
	const { user } = useUserContext();
	const location = useLocation();
	const navigate = useNavigate();
	const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

	const toAdmin = async () => {
		const entry = await getEntry(feature.id);
		if (entry) {
			setCurrentEntry(entry);
			// For some wierd purposes double navigation need to be here
			navigate(`/`);
			navigate(`/admin/${entry.location.mainLocation}`);
		}
	};

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
		<Card
			sx={{
				width: '100%',
				p: '1rem',
				borderColor: 'primary.main',
				borderStyle: 'solid',
				borderWidth: '1px',
				borderTop: 'none'
			}}
		>
			{feature.properties.introImage.length > 0 && (
				// eslint-disable-next-line react/jsx-no-useless-fragment
				<>
					{!urls || urls.length === 0 ? (
						<LoadingSpinner boxWidth="100%" textAlign="center" pt="2rem" />
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
			<CardContent sx={{ pb: 0 }}>
				<Typography gutterBottom variant="h5" component="div">
					{feature.properties.mainLocation}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{feature.properties.secondaryLocation}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<Stack direction="row" spacing={1}>
					<Button
						onClick={() => {
							if (location.pathname !== '/' || matches) {
								setDrawerOpen(false);
								// Otherwise map is not rendered correctly because of drawer size
								setTimeout(() => {
									navigate(`/`);
									setZoomTo(feature.geometry.coordinates);
								}, 500);
							} else {
								setZoomTo(feature.geometry.coordinates);
							}
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
				</Stack>
				{user && (
					<Tooltip sx={{ ml: 'auto' }} title="Upravit lokalitu">
						<IconButton onClick={toAdmin} color="primary">
							<SettingsIcon />
						</IconButton>
					</Tooltip>
				)}
			</CardActions>
		</Card>
	);
};

const LocationList = ({ setDrawerOpen }: { setDrawerOpen: any }) => {
	const { features } = useFeatures();

	return (
		<List sx={{ pt: 0 }}>
			{features
				.sort(
					(a, b) =>
						-b.properties.mainLocation[0].localeCompare(
							a.properties.mainLocation[0]
						)
				)
				.map((feature: Feature) => (
					<Box key={feature.id}>
						<Location setDrawerOpen={setDrawerOpen} feature={feature} />
						<Divider />
					</Box>
				))}
		</List>
	);
};

export default LocationList;
