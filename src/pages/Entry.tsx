import { Box } from '@mui/material';

import { useEntries } from '../contexts/EntriesContext';

import Text from './../components/Entry/Text';

const Entry = () => {
	const { currentEntry } = useEntries();
	console.log(currentEntry);

	return (
		<Box>
			<Text variant="h1" text={currentEntry?.location.mainLocation} />
			<Text text={currentEntry?.details?.record?.transcript} />
		</Box>
	);
};

export default Entry;
