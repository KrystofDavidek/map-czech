import AudioPlayer from 'react-h5-audio-player';
import { Stack, Grid } from '@mui/material';

import { Record as RecordType } from '../../models/entry';

import Text from './Text';
import TextSection from './TextSection';
import 'react-h5-audio-player/lib/styles.css';

type RecordProps = {
	record: RecordType;
};

const Record = ({ record }: RecordProps) => (
	<Grid container spacing={2}>
		<Grid item xs={12}>
			<Text variant="h4" component="h2" text="Nahrávka" />
		</Grid>
		<Grid item xs={12} md={6}>
			<Stack spacing={2}>
				<TextSection title="Komentář" texts={[record.comments]} />
			</Stack>
		</Grid>
		<Grid item xs={12} md={6}>
			<Stack spacing={2}>
				<AudioPlayer
					src={`../../assets/audio/${record.url}`}
					customAdditionalControls={[]}
					style={{
						maxWidth: '100%'
					}}
				/>
				<TextSection title="Transkripce" texts={[record.transcript]} />
				<TextSection title="Norma" texts={[record.urlToNorm]} includeLinks />
			</Stack>
		</Grid>
		<Grid item>
			<Stack spacing={2}>
				<TextSection
					title="Další zdroje"
					texts={record.otherSources}
					includeLinks
				/>
			</Stack>
		</Grid>
	</Grid>
);

export default Record;
