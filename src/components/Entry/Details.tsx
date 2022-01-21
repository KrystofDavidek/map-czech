import { useMemo } from 'react';
import 'react-h5-audio-player/lib/styles.css';
import { Divider, Stack } from '@mui/material';

import { useEntries } from '../../contexts/EntriesContext';

import Text from './Text';
import Record from './Record';
import TextSection from './TextSection';

const Details = () => {
	const { currentEntry } = useEntries();
	const details = useMemo(() => currentEntry?.details, [currentEntry]);

	return (
		<Stack spacing={2}>
			<Text variant="h3" component="h1" text="Detailní informace" />
			{details?.record && <Record record={details?.record} />}
			<Divider />
			{details?.history && (
				<>
					<Text variant="h4" component="h2" text="Historie" />
					<TextSection texts={[details?.history]} />
				</>
			)}
			<Divider />
			{details?.current && (
				<>
					<Text variant="h4" component="h2" text="Současnost" />
					<TextSection texts={[details?.current]} />
				</>
			)}
		</Stack>
	);
};

export default Details;
