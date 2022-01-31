import AudioPlayer from 'react-h5-audio-player';
import { Stack, Grid, Link, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';

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
		<Grid container spacing={2}>
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
								<CircularProgress sx={{ height: '20rem' }} />
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
					<Link
						sx={{ cursor: 'pointer' }}
						onClick={() => {
							setShowDetails(!showDetails);
						}}
					>
						{showDetails ? 'Zobrazit méně' : 'Zobrazit více'}
					</Link>
					{showDetails && (
						<>
							<TextSection title="Přepis" texts={[record.transcript]} />
							<TextSection
								title="Detailní informace"
								texts={[record.details]}
							/>
						</>
					)}
				</Stack>
			</Grid>
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
