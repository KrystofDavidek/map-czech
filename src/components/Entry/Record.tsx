import AudioPlayer from 'react-h5-audio-player';
import { Stack, Grid, Link, Fade } from '@mui/material';
import { useEffect, useState } from 'react';

import LoadingSpinner from '../LoadingSpinner';
import { Record as RecordType } from '../../models/entry';
import Text from '../Text';
import useAsyncFiles from '../../hooks/useAsyncFiles';

import TextSection from './TextSection';

import 'react-h5-audio-player/lib/styles.css';

type RecordProps = {
	record: RecordType;
};

const Record = ({ record }: RecordProps) => {
	const [showDetails, setShowDetails] = useState(false);
	const { urls, setNames } = useAsyncFiles(true);

	useEffect(() => {
		setNames(record.url);
	}, [record]);

	return (
		<Grid container rowSpacing={2}>
			<Grid item xs={12}>
				<Text variant="h4" component="h2" text="Nahrávka" />
			</Grid>
			<Grid item xs={12} md={6}>
				<Stack spacing={2}>
					<TextSection title="" texts={[record.comments]} />
				</Stack>
			</Grid>
			<Grid item xs={12} md={6}>
				<Stack spacing={2}>
					{record.url.length > 0 && (
						// eslint-disable-next-line react/jsx-no-useless-fragment
						<>
							{!urls || !urls[0] ? (
								<LoadingSpinner
									boxWidth="100%"
									textAlign="center"
									width="5rem"
									height="5rem"
								/>
							) : (
								<AudioPlayer
									src={urls?.[0]}
									autoPlayAfterSrcChange={false}
									customAdditionalControls={[]}
									style={{
										maxWidth: '100%'
									}}
									onPlay={() => {
										setShowDetails(true);
									}}
								/>
							)}
						</>
					)}
					{(record.transcript || record.details) && (
						<Link
							sx={{ cursor: 'pointer', width: 'fit-content' }}
							onClick={() => {
								setShowDetails(!showDetails);
							}}
						>
							{showDetails
								? 'Skrýt jazykové informace'
								: 'Zobrazit jazykové informace'}
						</Link>
					)}
				</Stack>
			</Grid>
			<Fade in={showDetails} unmountOnExit>
				<Grid item xs={12}>
					<TextSection title="Přepis" texts={[record.transcript]} />
					<TextSection
						title="Detailní informace k jazyku"
						texts={[record.details]}
					/>
				</Grid>
			</Fade>
			<Grid item>
				<Stack spacing={2}>
					<TextSection
						title="Další zdroje"
						texts={[record.otherSources]}
						includeLinks
					/>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default Record;
