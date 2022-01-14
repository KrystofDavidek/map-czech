import { Box } from '@mui/material';

import { useEntries } from '../contexts/EntriesContext';

const Entry = () => {
	const { currentEntry } = useEntries();
	console.log(currentEntry);

	return <Box> {currentEntry?.location.mainLocation}</Box>;
};

export default Entry;
